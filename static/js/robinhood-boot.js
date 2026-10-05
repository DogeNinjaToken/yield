(async function(){
'use strict';
const c=window.ROBINHOOD_FARM, root=document.getElementById('root');
function notice(title,detail){root.replaceChildren();const box=document.createElement('div');box.style.cssText='max-width:720px;margin:80px auto;padding:32px;background:#171f19;color:white;border-radius:16px;font:17px/1.6 sans-serif';const h=document.createElement('h1');h.textContent=title;const p=document.createElement('p');p.textContent=detail;box.append(h,p);root.append(box);}
if(!c.enabled){notice('YieldForge · Robinhood Chain','Launch configuration is not yet enabled.');return;}
let id=0;
let mainLoaded=false;
function loadMain(){
 if(mainLoaded)return;
 mainLoaded=true;
 const script=document.createElement('script');
 script.src='/static/js/main.776613c1.chunk.js';
 script.onerror=()=>notice('Unable to load farm','Please refresh the page.');
 document.body.append(script);
}
async function rpc(method,params){const res=await fetch(c.rpcUrl,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({jsonrpc:'2.0',id:++id,method,params}),signal:AbortSignal.timeout(15000)});if(!res.ok)throw Error('RPC HTTP '+res.status);const v=await res.json();if(v.error)throw Error(v.error.message);return v.result;}
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
 banner.id='rh-rpc-warning';
 banner.innerHTML='<strong>Robinhood connection unavailable</strong><span> The interface is safe, but staking is paused until the configured RPC responds. Set the Chainstack HTTPS endpoint in <code>static/js/robinhood-config.js</code>, then redeploy.</span>';
 banner.style.cssText='padding:12px 18px;background:rgba(57,37,20,.96);color:#ffdca4;font:13px/1.5 sans-serif;position:fixed;bottom:18px;right:18px;max-width:min(620px,calc(100% - 36px));z-index:1000;border:1px solid rgba(255,184,89,.28);border-radius:12px;box-shadow:0 18px 45px #0008';
 document.body.append(banner);
 const panel=document.createElement('section');
 panel.id='rh-rpc-offline-panel';
 panel.innerHTML='<div class="rh-offline-kicker">YIELDFORGE / ROBINHOOD</div><h1>Forge is ready. Network connection is not.</h1><p>The staking contracts and wallet integration are preserved. The configured RPC endpoint is not accepting browser JSON-RPC requests, so the farm has been held in a safe offline state rather than crashing.</p><p class="rh-offline-detail">Endpoint: <code></code></p><button type="button">Retry connection</button>';
 panel.querySelector('code').textContent=c.rpcUrl;
 panel.querySelector('button').onclick=()=>window.location.reload();
 panel.style.cssText='max-width:760px;margin:150px auto 80px;padding:42px 46px;background:linear-gradient(145deg,rgba(35,38,43,.96),rgba(13,15,18,.96));color:#f7f7f2;border:1px solid rgba(255,173,70,.24);border-radius:26px;box-shadow:0 28px 90px #0009;font:16px/1.65 Inter,system-ui,sans-serif';
 const style=document.createElement('style');style.textContent='#rh-rpc-offline-panel h1{margin:8px 0 16px;font-size:clamp(30px,5vw,58px);line-height:1.02;letter-spacing:-.045em}#rh-rpc-offline-panel p{max-width:620px;color:rgba(247,247,242,.72)}#rh-rpc-offline-panel code{color:#ffc04a;word-break:break-all}#rh-rpc-offline-panel .rh-offline-kicker{color:#ff8b31;font-size:11px;font-weight:800;letter-spacing:.24em}#rh-rpc-offline-panel button{margin-top:10px;padding:12px 18px;border:1px solid rgba(255,181,94,.48);border-radius:12px;background:linear-gradient(135deg,#ff781c,#d94211);color:white;font-weight:800;cursor:pointer}';document.head.append(style);
 root.append(panel);
}
})();
