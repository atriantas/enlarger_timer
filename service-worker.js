
self.addEventListener('install', function(e){
  e.waitUntil(caches.open('fstop-v1').then(function(cache){
    return cache.addAll(['index.html']);
  }));
});
self.addEventListener('fetch', function(e){
  e.respondWith(caches.match(e.request).then(function(r){ return r || fetch(e.request); }));
});
