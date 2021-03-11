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

// //when search is clicked
// function searchBar(event) {
//     event.preventDefault();
//     if (searchCity.val().trim()!=="") {
//         city=searchCity.val().trim();
//         getWeather(city);
//     }
// }

// function getWeather(city) {
    
//     //build url for first API req
//     var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
//     //make req to URL with jquery ajax call

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     })
//     .then(function(res) {

//     });
    
//     //start render data 
//     //get lat and long out of response object
// }

// $("searchButton").on("click", getWeather);


$("#searchButton").on("click", function() {
    
    //build url for first API req
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
    //make req to URL with jquery ajax call

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(res) {
        console.log(queryURL);

        console.log(res);

        var results = res.data;

        //elements for:
        //city name
        //date
        //temp
        //humidity
        //wind speed
        //uv index

    });

})

function clear() {
    $("#searchCity").empty();
}

$("#clearButton").on("click", clear);
