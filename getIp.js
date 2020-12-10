var myIp; 

var api_key = "at_mkLIkbTakk4E6vBL67rFMZgLRGCSq";
var url = "https://geo.ipify.org/api/v1";

var latValue;
var lngValue;

var typedAddress = document.querySelector('#typed-address');

// on submit search

$('button').click(function (e) {
    e.preventDefault();

    $.ajax({
        url: url,
        data: { apiKey: api_key, ipAddress: typedAddress.value, domain: typedAddress.value },
        success: function (data) {
  
            ipField.innerHTML = data.ip;
            ispField.innerHTML = data.isp;
            locationField.innerHTML = data.location.city + ", " + data.location.region;
            timezoneField.innerHTML = 'UTC ' + data.location.timezone

            latValue = data.location.lat;
            lngValue = data.location.lng;

            typedAddress.classList.remove('error');
            var newLatLng = new L.LatLng(latValue, lngValue);
            marker.setLatLng(newLatLng).bindPopup(`You searched for ${typedAddress.value}`);        
            mymap.setView(newLatLng).setZoom(5);
        
            return data;

        },
        error: function (error) {
            typedAddress.classList.add('error');
            alert("Error: " + error.status + " - " + error.responseJSON.messages);
        }       
    });
       
});


// on loading

$(function () {
    $.ajax({
        url: url,
        data: { apiKey: api_key, ipAddress: myIp },
        success: function (data) {
            console.log(data);

            ipField.innerHTML = data.ip;
            ispField.innerHTML = data.isp;
            locationField.innerHTML = data.location.city + ", " + data.location.region;
            timezoneField.innerHTML = 'UTC ' + data.location.timezone;
            latValue = data.location.lat;
            lngValue = data.location.lng;

            return data;

        }
    });
});


