var MapWrapper = require('../../build/mapWrapper');

var MapView = function(locations){
  this.initialize(locations);
}

MapView.prototype = {
  initialize: function(locations){
    var center = { lat: 26.5, lng: 31 };
    var zoom = 6;
    var mapDiv = document.querySelector("#main-map");
    var map = new MapWrapper(mapDiv, center, zoom);
    var infowindow = new google.maps.InfoWindow();


    locations.forEach(function(location){
      map.addMarker(location, infowindow);
    })

  }

}

module.exports = MapView;