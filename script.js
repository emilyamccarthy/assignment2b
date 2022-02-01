var map = L.map('mapid').setView([37.71,-122.4], 11.5)

// load a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// load geojson
$.getJSON("https://raw.githubusercontent.com/emilyamccarthy/assignment2b/main/sf_crime.geojson",function(data){
  var crimeIcon = L.icon({
    iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiWtEMxYk8thwReYKeL6VTBBlTGioEssRF3w&usqp=CAU",
    iconSize: [16,16]
  });
  L.geoJson(data, {
    pointToLayer: function(feature,latlng){
      return L.marker(latlng,{icon: crimeIcon});
    }
  }).addTo(map);
});
