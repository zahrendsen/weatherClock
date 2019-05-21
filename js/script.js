"use strict";



$(document).ready(function() {
    var location = document.getElementById("location");
    var apiKey = "c61b32543cd2947a6ff8e4e2bfb384ae";
    var url = "http://api.openweathermap.org/data/2.5/weather?";

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        $.getJSON(
            url + "lat=" + latitude + "&" + "lon=" + longitude + "&" + "units=imperial" + "&" + "appid=" + apiKey,
            function(data) {
                var temperature = data.main.temp
                var locationName = data.name;
                // var weatherCondition = data.weather[2];
                $("#temp").text(temperature + " °F");
                $("#location").text("City: " + locationName);
                // $("#weatherCondition").text(weatherCondition);
            }

        );
    }

    function error() {
        location.innerHTML = "Unable to retrieve your location";
    }

    location.innerHTML = "Locating...";
})

showClock();

setInterval("showClock()", 1000);

function showClock() {
    var thisDay = new Date();
    var localDate = thisDay.toLocaleDateString();
    var localTime = thisDay.toLocaleTimeString();
    var dayValue = thisDay.getDay();
    var weekDay = ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"];

    document.getElementById("currentTime").innerHTML = '<div id="localTime">' + localTime + '</div>' + '<div id="localDate">' +
        weekDay[dayValue] + " " + localDate + '</div>';
    return weekDay[dayValue];
}