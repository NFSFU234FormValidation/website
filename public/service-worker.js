// public/service-worker.js
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-pwa-cache-v1').then((cache) => {
        return cache.addAll([
          '/',
          '/manifest.json',
          '/nforshifu234_dev_dark_logo.png',
          // Add other assets you want to cache
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  