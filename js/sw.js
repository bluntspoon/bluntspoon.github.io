this.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/css/style.css',
          '/css/images/',
          '/css/images/bg.jpg'        
        ]);
      })
    );
  });