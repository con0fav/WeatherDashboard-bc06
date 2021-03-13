var city="";

var searchCity = $("#searchCity");
var searchButton = $("#searchButton");
var clearButton = $("#clearButton");
var currentCity = $("#currentCity");
var cityTemp = $("#temperature");
var cityHumidty = $("#humidity");
var cityWind = $("#wind");
var cityUV = $("#uv");
var cityArray = [];

var APIKey = "f0b02fab26617617b2432ba827c42fc0";

function getWeather(city) {
    
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(res) {
        console.log(res)
    });
}



$("#searchButton").on("click", function(event) {
    event.preventDefault();

    var cityResult = $("searchCity").val().trim();

    getWeather(cityResult);
})


function clear() {
    $("#searchCity").empty();
}

$("#clearButton").on("click", clear);
