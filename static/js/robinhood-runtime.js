(function(){
'use strict';
const c=window.ROBINHOOD_FARM;
const address=x=>typeof x==='string'&&/^0x[0-9a-fA-F]{40}$/.test(x)&&!/^0x0{40}$/.test(x);
const chainKey=x=>({[c.chainId]:x});
c.tokens.forge={...c.tokens.forge,address:c.tokenAddress,symbol:c.tokenSymbol,decimals:18};
window.RH={
  address, chainKey,
  tokens:()=>Object.fromEntries(Object.entries(c.tokens).map(([k,v])=>[k,{...v,address:chainKey(v.address),projectLink:c.links.docs||'#'}])),
  farms:()=>c.farms.filter(f=>f.isTokenOnly===true).map(f=>({...f,lpSymbol:f.label,lpAddresses:chainKey(c.tokens[f.token].address),token:{...c.tokens[f.token],address:chainKey(c.tokens[f.token].address)},quoteToken:{...c.tokens[f.quoteToken],address:chainKey(c.tokens[f.quoteToken].address)}})),
  prices:{},
  async getPrices(web3){
    const prices={};
    for(const [key,t] of Object.entries(c.tokens)) if(t.priceUsd!=null) prices[key]=String(t.priceUsd);
    const abi=[{name:'token0',type:'function',inputs:[],outputs:[{name:'',type:'address'}],stateMutability:'view'}, {name:'token1',type:'function',inputs:[],outputs:[{name:'',type:'address'}],stateMutability:'view'}, {name:'getReserves',type:'function',inputs:[],outputs:[{name:'reserve0',type:'uint112'},{name:'reserve1',type:'uint112'},{name:'blockTimestampLast',type:'uint32'}],stateMutability:'view'}];
    // Resolve dependencies over several passes, without inventing a fallback market price.
    const pairs=await Promise.all(c.pricePairs.map(async p=>{const x=new web3.eth.Contract(abi,p.address);return {p,t0:(await x.methods.token0().call()).toLowerCase(),t1:(await x.methods.token1().call()).toLowerCase(),r:await x.methods.getReserves().call()}}));
    for(let i=0;i<=pairs.length;i++) for(const {p,t0,t1,r} of pairs){
      if(prices[p.quoteToken]==null)continue;
      const base=c.tokens[p.token],quote=c.tokens[p.quoteToken];
      if(![t0,t1].includes(base.address.toLowerCase())||![t0,t1].includes(quote.address.toLowerCase())||base.address.toLowerCase()===quote.address.toLowerCase()) throw Error('Pricing pair token mismatch');
      const reverse=t0!==base.address.toLowerCase();
      const a=Number(r[reverse?1:0])/10**base.decimals,b=Number(r[reverse?0:1])/10**quote.decimals;
      if(a>0 && b>0)prices[p.token]=String(b/a*Number(prices[p.quoteToken]));
    }
    window.RH.prices=prices;return prices;
  },
  async switchNetwork(){
    if(!window.RH.getWallet())return false;
    const id='0x'+c.chainId.toString(16);
    try{await window.RH.getWallet().request({method:'wallet_switchEthereumChain',params:[{chainId:id}]});}
    catch(e){if(e.code!==4902&&e?.data?.originalError?.code!==4902)throw e;
      await window.RH.getWallet().request({method:'wallet_addEthereumChain',params:[{chainId:id,chainName:c.chainName,nativeCurrency:{name:'Ether',symbol:'ETH',decimals:18},rpcUrls:[c.rpcUrl],blockExplorerUrls:[c.explorerUrl]}]});
      await window.RH.getWallet().request({method:'wallet_switchEthereumChain',params:[{chainId:id}]});
    }
    return Number(await window.RH.getWallet().request({method:'eth_chainId'}))===c.chainId;
  }
};
})();
// Keep browser-wallet signing, but estimate gas on the selected chain for every write.
window.RH.wrapContract=function(contract){
 const methods=contract.methods;
 contract.methods=new Proxy(methods,{get(target,key){
   const make=target[key];if(typeof make!=='function')return make;
   return function(...args){const method=make.apply(target,args),send=method.send.bind(method);
     method.send=function(options){const listeners=[];let live;
       const promise=(async()=>{
         if(Number(await window.RH.getWallet().request({method:'eth_chainId'}))!==window.ROBINHOOD_FARM.chainId)throw Error('Switch to the configured Robinhood network');
         const estimate=await method.estimateGas(options);
         live=send({...options,gas:Math.ceil(Number(estimate)*1.25)+50000});
         for(const [event,handler]of listeners)live.on(event,handler);
         const receipt=await live;window.dispatchEvent(new Event('rh:transaction'));return receipt;
       })();
       promise.on=function(event,handler){if(live)live.on(event,handler);else listeners.push([event,handler]);return promise;};
       return promise;
     };return method;
   };
 }});return contract;
};
// Direct EIP-1193 / EIP-6963 wallet support for the legacy React farm.
(function(){
 const RH=window.RH,providers=new Map(),adapters=new WeakMap();let selected=null;
 window.addEventListener('eip6963:announceProvider',e=>{if(e.detail?.provider?.request)providers.set(e.detail.info.uuid,e.detail);});
 window.dispatchEvent(new Event('eip6963:requestProvider'));
 function raw(){return selected||[...providers.values()].find(x=>x.info.rdns==='io.metamask')?.provider||(providers.size===1?[...providers.values()][0].provider:null)||window.ethereum;}
 function adapter(p){if(!p)return null;if(adapters.has(p))return adapters.get(p);
  const a={request:args=>p.request(args),on:(...args)=>p.on?.(...args),removeListener:(...args)=>p.removeListener?.(...args),isMetaMask:!!p.isMetaMask};
  a.sendAsync=(payload,callback)=>a.request({method:payload.method,params:payload.params||[]}).then(result=>callback(null,{jsonrpc:'2.0',id:payload.id,result}),error=>callback(error));
  a.send=(payload,second)=>{if(typeof payload==='string')return a.request({method:payload,params:Array.isArray(second)?second:[]});if(typeof second==='function')return a.sendAsync(payload,second);return a.request(payload).then(result=>({jsonrpc:'2.0',id:payload.id,result}));};
  adapters.set(p,a);return a;
 }
 RH.getWallet=()=>adapter(raw());
 RH.selectWallet=async()=>{window.dispatchEvent(new Event('eip6963:requestProvider'));const p=raw();if(!p?.request)throw Error('No browser wallet detected. Open this site in the browser containing MetaMask, unlock it and refresh.');selected=p;return adapter(p);};
 RH.walletStatus=function(message,error){let el=document.getElementById('rh-wallet-status');if(!el){el=document.createElement('div');el.id='rh-wallet-status';el.setAttribute('role','status');el.style.cssText='position:fixed;top:76px;right:16px;z-index:99999;max-width:420px;padding:16px;border-radius:10px;background:#1b2534;color:white;font:15px/1.5 sans-serif;box-shadow:0 4px 20px #0008';el.onclick=()=>el.remove();document.body.append(el);}el.textContent=message;el.style.border=error?'1px solid #ff8989':'1px solid #b3ff6b';if(!error&&message.startsWith('Connected'))setTimeout(()=>el.remove(),5000);};
 RH.modernConnector=function(connector){let active=null;
  const accountChanged=accounts=>accounts.length?connector.emitUpdate({account:accounts[0]}):connector.emitDeactivate();
  const chainChanged=chainId=>connector.emitUpdate({chainId:Number(chainId),provider:active});
  const disconnected=()=>connector.emitDeactivate();
  connector.deactivate=()=>{if(active){active.removeListener('accountsChanged',accountChanged);active.removeListener('chainChanged',chainChanged);active.removeListener('disconnect',disconnected);}active=null;};
  connector.activate=async()=>{connector.deactivate();active=await RH.selectWallet();const accounts=await active.request({method:'eth_requestAccounts'});if(!accounts.length)throw Error('Wallet did not return an account.');const chainId=Number(await active.request({method:'eth_chainId'}));if(chainId!==window.ROBINHOOD_FARM.chainId)throw Error('Select '+window.ROBINHOOD_FARM.chainName+' in your wallet.');active.on('accountsChanged',accountChanged);active.on('chainChanged',chainChanged);active.on('disconnect',disconnected);return{provider:active,account:accounts[0],chainId};};
  connector.getProvider=async()=>active||RH.getWallet();
  connector.getChainId=async()=>Number(await (active||RH.getWallet()).request({method:'eth_chainId'}));
  connector.getAccount=async()=>(await (active||RH.getWallet()).request({method:'eth_accounts'}))[0];
  connector.isAuthorized=async()=>{try{const p=RH.getWallet();return !!p&&(await p.request({method:'eth_accounts'})).length>0;}catch{return false;}};
  return connector;
 };
 document.addEventListener('click',event=>{const button=event.target.closest?.('button');if(button&&/^(connect|connect wallet|unlock wallet)$/i.test(button.textContent.trim())){event.preventDefault();event.stopImmediatePropagation();if(RH.login)RH.login();else RH.walletStatus('The farm is still loading. Please try again shortly.',true);}},true);
})();
