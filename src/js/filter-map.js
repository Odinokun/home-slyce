let filterCoords = [
  [43.2226, 76.9000] //центр карты при загрузке
];

let mainMarker =[
  [43.2226, 76.9000] //комплекс
]

let filterEducation = [
  [43.24, 76.82520076766589],
  [43.200883733332574, 76.82605907449374],
  [43.21664857291734, 76.8449418247065],
  [43.20638937840749, 76.87790080689605],
  [43.24804099090733, 76.94090052806042],
  [43.20, 76.92]
];

let filterMedicine = [
  [43.248416101300286, 76.85524150664072],
  [43.2128954092615, 76.94931193497337],
  [43.24866617361223, 76.96699305562714]
];

let filterShop = [
  [43.22515488869164, 76.88476726151885],
  [43.20213505993427, 76.97042628293855],
  [43.211018740812946, 76.98433085354975]
]

let filterFun = [
  [43.25, 76.82966396317072],
  [43.1965038881178, 76.85506984527515]
];

let filterMap = {};

let allMarkers = [];

function initialize() {
  let mapDiv = document.getElementById("filter-map");
  let image = "assets/img/marker.svg";
  let imageEducation = "assets/img/marker-education.svg";
  let imageMedicine = "assets/img/marker-medicine.svg";
  let imageShop = "assets/img/marker-shop.svg";
  let imageFun = "assets/img/marker-fun.svg";

  filterMap = new google.maps.Map(mapDiv, {
    zoom: 13,
    disableDefaultUI: false,
    scrollwheel: false,
    center: new google.maps.LatLng(filterCoords[0][0], filterCoords[0][1]),
    styles: [{"featureType": "administrative.neighborhood","elementType": "all","stylers": [{"visibility": "simplified"}]},{"featureType": "landscape.natural","elementType": "geometry.fill","stylers": [{"visibility": "on"},{"color": "#e0efef"}]},{"featureType": "landscape.natural.landcover","elementType": "all","stylers": [{"visibility": "on"}]},{"featureType": "landscape.natural.landcover","elementType": "geometry","stylers": [{"visibility": "on"}]},{"featureType": "landscape.natural.terrain","elementType": "all","stylers": [{"visibility": "on"}]},{"featureType": "poi","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "poi","elementType": "geometry","stylers": [{"visibility": "off"}]},{"featureType": "poi","elementType": "geometry.fill","stylers": [{"visibility": "on"},{"hue": "#1900ff"},{"color": "#c0e8e8"}]},{"featureType": "poi","elementType": "labels","stylers": [{"visibility": "off"}]},{"featureType": "poi.attraction","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "poi.business","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "poi.government","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "poi.medical","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "poi.park","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"visibility": "simplified"},{"color": "#cbe3cc"}]},{"featureType": "poi.park","elementType": "labels","stylers": [{"visibility": "off"}]},{"featureType": "poi.place_of_worship","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "poi.school","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "poi.sports_complex","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "road","elementType": "geometry","stylers": [{"lightness": 100},{"visibility": "simplified"}]},{"featureType": "road","elementType": "labels","stylers": [{"visibility": "off"}]},{"featureType": "road.highway.controlled_access","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "road.arterial","elementType": "all","stylers": [{"visibility": "on"}]},{"featureType": "road.arterial","elementType": "labels","stylers": [{"visibility": "simplified"},{"invert_lightness": true}]},{"featureType": "road.local","elementType": "all","stylers": [{"visibility": "simplified"}]},{"featureType": "road.local","elementType": "geometry","stylers": [{"visibility": "on"}]},{"featureType": "road.local","elementType": "geometry.fill","stylers": [{"visibility": "on"}]},{"featureType": "road.local","elementType": "geometry.stroke","stylers": [{"visibility": "on"}]},{"featureType": "road.local","elementType": "labels","stylers": [{"invert_lightness": true}]},{"featureType": "transit","elementType": "all","stylers": [{"visibility": "simplified"}]},{"featureType": "transit","elementType": "labels","stylers": [{"visibility": "simplified"}]},{"featureType": "transit","elementType": "labels.text","stylers": [{"visibility": "simplified"},{"color": "#777777"}]},{"featureType": "transit.line","elementType": "geometry","stylers": [{"visibility": "off"},{"lightness": 700}]},{"featureType": "transit.line","elementType": "labels","stylers": [{"visibility": "off"}]},{"featureType": "water", "elementType": "all","stylers": [{"color": "#9cdfdf"},{"visibility": "simplified"}]}]
  });

  function addMarkers(markers, image) {
    $.each(markers, function(index, val) {
      let myLatLng = new google.maps.LatLng(val[0], val[1]);
      let marker = new google.maps.Marker({
        position: myLatLng,
        map: filterMap,
        icon: image
      });

      allMarkers.push(marker);
    });
  }

  addMarkers(mainMarker,      image);
  addMarkers(filterEducation, imageEducation);
  addMarkers(filterMedicine,  imageMedicine);
  addMarkers(filterShop,      imageShop);
  addMarkers(filterFun,       imageFun);

  function clearMarkers() {
    for (let i = 0; i < allMarkers.length; i++) {
      allMarkers[i].setMap(null)
    }
    allMarkers = [];
  }

  $('.filter__btn--01').on('click', function (){
    clearMarkers();
    addMarkers(mainMarker,      image);
    addMarkers(filterEducation, imageEducation);
    addMarkers(filterMedicine,  imageMedicine);
    addMarkers(filterShop,      imageShop);
    addMarkers(filterFun,       imageFun);
  });

  $('.filter__btn--02').on('click', function (){
    clearMarkers();
    addMarkers(mainMarker,      image);
    addMarkers(filterEducation, imageEducation);
  });

  $('.filter__btn--03').on('click', function (){
    clearMarkers();
    addMarkers(mainMarker,      image);
    addMarkers(filterMedicine,  imageMedicine);
  });

  $('.filter__btn--04').on('click', function (){
    clearMarkers();
    addMarkers(mainMarker,      image);
    addMarkers(filterShop,      imageShop);
  });

  $('.filter__btn--05').on('click', function (){
    clearMarkers();
    addMarkers(mainMarker,      image);
    addMarkers(filterFun,       imageFun);
  });

  $('.filter__btn').on('click', function () {
    $('.filter__btn').removeClass('active');
    $(this).addClass('active');
  })
}

google.maps.event.addDomListener(window, "load", initialize);
