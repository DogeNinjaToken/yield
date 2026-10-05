(async function(){
'use strict';
const c=window.ROBINHOOD_FARM, root=document.getElementById('root');
function notice(title,detail){root.replaceChildren();const box=document.createElement('div');box.style.cssText='max-width:720px;margin:80px auto;padding:32px;background:#171f19;color:white;border-radius:16px;font:17px/1.6 sans-serif';const h=document.createElement('h1');h.textContent=title;const p=document.createElement('p');p.textContent=detail;box.append(h,p);root.append(box);}
if(!c.enabled){notice('YieldForge · Robinhood Chain','Launch configuration is not yet enabled.');return;}
let id=0;
function loadMain(){
 const script=document.createElement('script');
 script.src='/static/js/main.776613c1.chunk.js';
 script.onerror=()=>notice('Unable to load farm','Please refresh the page.');
 document.body.append(script);
}
async function rpc(method,params){const res=await fetch(c.rpcUrl,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({jsonrpc:'2.0',id:++id,method,params}),signal:AbortSignal.timeout(15000)});const v=await res.json();if(v.error)throw Error(v.error.message);return v.result;}
const call=(to,data)=>rpc('eth_call',[{to,data},'latest']);
const word=x=>BigInt(x).toString(16).padStart(64,'0');
const addr=x=>'0x'+x.slice(26,66);
try{
 if(![4663,46630].includes(c.chainId))throw Error('Unsupported chain ID');
 if(Number(await rpc('eth_chainId',[]))!==c.chainId)throw Error('RPC chain ID does not match configuration');
 for(const [key,a]of Object.entries({token:c.tokenAddress,masterChef:c.masterChefAddress,multicall:c.multicallAddress,...Object.fromEntries(Object.entries(c.tokens).map(([k,t])=>[k,t.address]))})){
  if(!window.RH.address(a))throw Error('Missing or invalid '+key+' address');
  if((await rpc('eth_getCode',[a,'latest']))==='0x')throw Error('No contract at '+key+' address');
 }
 if(addr(await call(c.tokenAddress,'0x8da5cb5b')).toLowerCase()!==c.masterChefAddress.toLowerCase())throw Error('Token ownership must be transferred to MasterChef');
 if(addr(await call(c.masterChefAddress,'0x6c6f4239')).toLowerCase()!==c.tokenAddress.toLowerCase())throw Error('MasterChef reward token mismatch');
 await call(c.multicallAddress,'0x252dba42'+word(32)+word(0));
 if(BigInt(await call(c.masterChefAddress,'0x081e3eda'))!==BigInt(c.farms.length))throw Error('Configured pool count differs from MasterChef');
 const seen=new Set();
 for(const [key,t]of Object.entries(c.tokens)){
  const actual=Number(BigInt(await call(t.address,'0x313ce567')));
  if(t.decimals==null)t.decimals=actual;
  if(!Number.isInteger(t.decimals)||t.decimals<0||t.decimals>36)throw Error('Invalid decimals: '+key);
  if(actual!==t.decimals)throw Error('Wrong decimals: '+key);
  if(t.priceUsd!=null&&!(Number.isFinite(Number(t.priceUsd))&&Number(t.priceUsd)>0))throw Error('Invalid price: '+key);
 }
 for(const f of c.farms){
  if(!Number.isInteger(f.pid)||f.pid<0||seen.has(f.pid)||!c.tokens[f.token]||!c.tokens[f.quoteToken])throw Error('Invalid farm configuration');seen.add(f.pid);
  if(f.isTokenOnly!==true||f.quoteToken!==f.token)throw Error('Only single-token staking is supported');
  const stake=c.tokens[f.token].address;
  if(!window.RH.address(stake))throw Error('Missing stake address for pool '+f.pid);
  const info=await call(c.masterChefAddress,'0x1526fe27'+word(f.pid));
  if(addr(info).toLowerCase()!==stake.toLowerCase())throw Error('Stake token mismatch at pool '+f.pid);
  const fee=Number(BigInt('0x'+info.slice(2+64*4,2+64*5)));
  if(f.depositFeeBP!=null&&fee!==f.depositFeeBP)throw Error('Deposit fee mismatch at pool '+f.pid);

 }
 if(!seen.has(0))throw Error('Include pool 0');
 for(const v of c.vaults){if(!window.RH.address(v.address)||!c.tokens[v.stakingToken]||!c.tokens[v.earningToken]||!Number.isInteger(v.sousId)||v.sousId<=0)throw Error('Invalid vault configuration');}
 const banner=document.createElement('div');banner.textContent=c.chainName+' · Amounts are token units, not underlying shares. USD/APR estimates require a configured token price; zero means unavailable or no rewards. '+(c.chainId===46630?'Testnet — tokens have no monetary value.':'');banner.style.cssText='padding:8px 16px;background:#15291b;color:#d9ecda;font:13px/1.4 sans-serif;position:fixed;bottom:0;right:0;max-width:calc(100% - 32px);z-index:1000';document.body.prepend(banner);
 loadMain();
 window.ethereum?.on?.('chainChanged',()=>window.location.reload());
}catch(e){
 console.error('YieldForge RPC validation warning:',e);
 const banner=document.createElement('div');
 banner.textContent='Robinhood RPC unavailable — showing interface in read-only mode. Refresh after the RPC is reachable.';
 banner.style.cssText='padding:9px 16px;background:#392514;color:#ffdca4;font:13px/1.4 sans-serif;position:fixed;bottom:0;right:0;max-width:calc(100% - 32px);z-index:1000';
 document.body.prepend(banner);
 loadMain();
}
})();
