let coords = [
  [43.2226, 76.9000] //центр карты при загрузке
];

let markers = [
  [43.2226, 76.9009]
];
let markersBank = [
  [43.2160, 76.8950]
];

let map = {};

function initialize() {
  let mapDiv = document.getElementById("footer-map");
  let image = "assets/img/marker-lg.svg";
  let imageBank = "assets/img/marker-bank.svg";

  map = new google.maps.Map(mapDiv, {
    zoom: 15,
    disableDefaultUI: false,
    scrollwheel: false,
    center: new google.maps.LatLng(coords[0][0], coords[0][1]),
    styles: [{"featureType": "administrative.neighborhood","elementType": "all","stylers": [{"visibility": "simplified"}]},{"featureType": "landscape.natural","elementType": "geometry.fill","stylers": [{"visibility": "on"},{"color": "#e0efef"}]},{"featureType": "landscape.natural.landcover","elementType": "all","stylers": [{"visibility": "on"}]},{"featureType": "landscape.natural.landcover","elementType": "geometry","stylers": [{"visibility": "on"}]},{"featureType": "landscape.natural.terrain","elementType": "all","stylers": [{"visibility": "on"}]},{"featureType": "poi","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "poi","elementType": "geometry","stylers": [{"visibility": "off"}]},{"featureType": "poi","elementType": "geometry.fill","stylers": [{"visibility": "on"},{"hue": "#1900ff"},{"color": "#c0e8e8"}]},{"featureType": "poi","elementType": "labels","stylers": [{"visibility": "off"}]},{"featureType": "poi.attraction","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "poi.business","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "poi.government","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "poi.medical","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "poi.park","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"visibility": "simplified"},{"color": "#cbe3cc"}]},{"featureType": "poi.park","elementType": "labels","stylers": [{"visibility": "off"}]},{"featureType": "poi.place_of_worship","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "poi.school","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "poi.sports_complex","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "road","elementType": "geometry","stylers": [{"lightness": 100},{"visibility": "simplified"}]},{"featureType": "road","elementType": "labels","stylers": [{"visibility": "off"}]},{"featureType": "road.highway.controlled_access","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "road.arterial","elementType": "all","stylers": [{"visibility": "on"}]},{"featureType": "road.arterial","elementType": "labels","stylers": [{"visibility": "simplified"},{"invert_lightness": true}]},{"featureType": "road.local","elementType": "all","stylers": [{"visibility": "simplified"}]},{"featureType": "road.local","elementType": "geometry","stylers": [{"visibility": "on"}]},{"featureType": "road.local","elementType": "geometry.fill","stylers": [{"visibility": "on"}]},{"featureType": "road.local","elementType": "geometry.stroke","stylers": [{"visibility": "on"}]},{"featureType": "road.local","elementType": "labels","stylers": [{"invert_lightness": true}]},{"featureType": "transit","elementType": "all","stylers": [{"visibility": "simplified"}]},{"featureType": "transit","elementType": "labels","stylers": [{"visibility": "simplified"}]},{"featureType": "transit","elementType": "labels.text","stylers": [{"visibility": "simplified"},{"color": "#777777"}]},{"featureType": "transit.line","elementType": "geometry","stylers": [{"visibility": "off"},{"lightness": 700}]},{"featureType": "transit.line","elementType": "labels","stylers": [{"visibility": "off"}]},{"featureType": "water", "elementType": "all","stylers": [{"color": "#9cdfdf"},{"visibility": "simplified"}]}]
  });

  $.each(markers, function(index, val) {
    let myLatLng = new google.maps.LatLng(val[0], val[1]);
    let marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
    });
  });

  $.each(markersBank, function(index, val) {
    let myLatLng = new google.maps.LatLng(val[0], val[1]);
    let marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: imageBank
    });
  });
}

google.maps.event.addDomListener(window, "load", initialize);