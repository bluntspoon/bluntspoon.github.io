(function () {
  skel.init({
    reset: 'full',
    breakpoints: {
      'global': {
        range: '*',
        href: 'css/style.css',
        viewport: {
          scalable: false
        }
      },
      'wide': {
        range: '-1680',
        href: 'css/style-wide.css'
      },
      'normal': {
        range: '-1280',
        href: 'css/style-normal.css'
      },
      'mobile': {
        range: '-736',
        href: 'css/style-mobile.css'
      },
      'mobilep': {
        range: '-480',
        href: 'css/style-mobilep.css'
      }
    }
  });

  // Remove "loading" class once the page has fully loaded.
  window.onload = function () {
    document.body.className = '';
    document.getElementById("preloader").remove();
    window.addEventListener('online',  updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    if (navigator.geolocation && navigator.onLine) {
        getLocation();
      } 
    }

function updateOnlineStatus(event) {
  if(navigator.onLine ){
    document.getElementById("offline-indicator").classList.remove("offline-ui-down");
  }else{
    document.getElementById("offline-indicator").classList.add("offline-ui-down");
  }
}

function getLocation(){
  var startPos;

  var geoSuccess = function(position) {
    startPos = position;
    var geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(startPos.coords.latitude,startPos.coords.longitude);
  
        geocoder.geocode({
            latLng: latlng
        }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                  document.getElementById('address').innerHTML = results[0].formatted_address;
                }
            } else {
              document.getElementById('address').innerHTML = trans.NoResolvedAddress;
            }
            document.getElementById('location').style.display = 'block';
        });

  };
  navigator.geolocation.getCurrentPosition(geoSuccess);
}


function error(msg) {
  alert("Sorry: " + msg);
  // var s = document.querySelector('#status');
  // s.innerHTML = typeof msg == 'string' ? msg : "failed";
  // s.className = 'fail';

  // console.log(arguments);
}

  // Prevent scrolling on touch.
  window.ontouchmove = function () {
    return false;
  }

  // Fix scroll position on orientation change.
  window.onorientationchange = function () {
    document.body.scrollTop = 0;
  }

})();
