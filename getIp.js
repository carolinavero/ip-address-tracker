var myIp; 
var api_key = "at_mkLIkbTakk4E6vBL67rFMZgLRGCSq";

var loadData = $.ajax({
    url: "https://geo.ipify.org/api/v1",
    data: { apiKey: api_key, ipAddress: myIp },
    success: function (data) {
        console.log(data);

        ipField.innerHTML = data.ip;
        ispField.innerHTML = data.isp;
        locationField.innerHTML = data.location.city + ", " + data.location.region;
        timezoneField.innerHTML = 'UTC ' + data.location.timezone

        return data;

    }
});


$(function () {
    loadData();
});


