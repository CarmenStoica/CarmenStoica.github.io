document.getElementById("id_logic_version").innerHTML = "Logic: 2019.02.11.0";
function weather() {
  var location = document.getElementById("location");
//*  var apiKey = "bd5e378503939ddaee76f12ad7a97608";
//*  var url ="https://api.forecast.io/forecast/";
    var url = "http://api.openweathermap.org/data/2.5/forecast/daily?lat=";
    navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    location.innerHTML =
      "Latitude is " + latitude + "° Longitude is " + longitude + "°";

    $.getJSON(
      url + "/" + latitude + "," + longitude + "?callback=?",
      function(data) {
        $("#temp").html(data.currently.temperature + "° C");
        $("#minutely").html(data.minutely.summary);
      }
    );
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }

  location.innerHTML = "Locating...";
}

weather();