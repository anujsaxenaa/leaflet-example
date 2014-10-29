var map = L.map('map').setView([40.7241745, -73.9841674], 13);
L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

var marker = L.marker([40.7241745, -73.9841674]).addTo(map);
marker.bindPopup("Anuj's house");
