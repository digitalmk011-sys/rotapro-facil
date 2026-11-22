const CACHE='rotapro-facil-v1-3-9';
const TILE_CACHE='rotapro-facil-map-v1';
const ASSETS=['./','./index.html','./style.css','./app.js','./manifest.json','./logo.png','./icon-192.png','./icon-512.png','./header-banner.png','./facil.css','./facil.js','./aula/01.webp','./aula/02.webp','./aula/03.webp','./aula/04.webp','./aula/05.webp','./aula/06.webp','./aula/07.webp','./aula/08.webp','./aula/09.webp','./aula/10.webp','./aula/11.webp','./aula/12.webp','./aula/13.webp','./aula/14.webp','./aula/15.webp','./aula/16.webp','./aula/17.webp','./aula/18.webp','./aula/19.webp','./aula/20.webp','./aula/21.webp','./aula/22.webp','./aula/23.webp','./aula/24.webp',
 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
 'https://unpkg.com/@tomickigrzegorz/leaflet-rotate@0.2.4/dist/leaflet-rotate.umd.min.js',
 'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(async c=>{for(const u of ASSETS){try{await c.add(u)}catch(err){}}}).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('rotapro-facil-')&&k!==CACHE&&k!==TILE_CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 const u=new URL(e.request.url);
 if(u.hostname==='tile.openstreetmap.org'){
   e.respondWith(caches.open(TILE_CACHE).then(async c=>{const hit=await c.match(e.request);if(hit)return hit;try{const r=await fetch(e.request);if(r&&(r.ok||r.type==='opaque'))c.put(e.request,r.clone()).catch(()=>{});return r}catch(err){return hit||new Response('',{status:503,statusText:'Offline'})}}));return;
 }
 if(u.origin!==location.origin){
   e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(r=>{if(r&&(r.ok||r.type==='opaque'))caches.open(CACHE).then(c=>c.put(e.request,r.clone())).catch(()=>{});return r}).catch(()=>new Response('',{status:503,statusText:'Offline'}))));return;
 }
 e.respondWith(fetch(e.request).then(r=>{if(u.origin===location.origin){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{})}return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));
});
