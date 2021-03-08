self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('sw-cache').then(function(cache) {
        return cache.add('index.html','style.css','app.js');
      })
    );
  });
   
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });