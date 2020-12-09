// initial values
var myLocation; /* [-16.5879, -43.9];   */

// results
var locationField = document.querySelector('#location-field');
var timezoneField = document.querySelector('#timezone-field');
var ispField = document.querySelector('#isp-field');
var ipField = document.querySelector('#ip-field');

// inputs typed
var typedAddress = document.querySelector('#typed-address').value;

//icon
var myIcon = L.icon({
    iconUrl: 'images/icon-location.svg',
    iconSize: [46, 56],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});

// map
console.log("my loc..", myLocation)
/* var mymap = L.map('mapid').setView(myLocation, 13); */

var mymap = L.map('mapid').locate({ setView: true, watch: true })
             .on('locationfound', function (e) {
                console.log("found..")
                var marker = L.marker([e.latitude, e.longitude], { icon: myIcon }).bindPopup('You are here!');
                mymap.addLayer(marker);
            })
             .on('locationerror', function (e) {
                console.log("not found...")
                console.log(e);
                alert("Location access denied.");
            });

// popup
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2Fyb2xpbmF2ZXJvIiwiYSI6ImNrZ2I2dzZydjBlM3cyeXByaDJjYjdnaGgifQ.LHGfhJuFJEr67__F5fCqXA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);


function checkNewIp(e) {
    
    e.preventDefault();
    
    console.log(e.target.value)
    console.log("check new ip...");
}