self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v2').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/css/style.css',
          '/css/images/bg.jpg'        
        ]);
      })
    );
  });


