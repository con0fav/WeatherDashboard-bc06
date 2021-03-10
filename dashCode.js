var city="";

var searchCity = $("#searchCity");
var searchButton = $("#searchButton");
var clearButton = $("#clearButton");
var searchedCity = $("#searchedCity");
var cityTemp = $("#temperature");
var cityHumidty = $("#humidity");
var cityWind = $("#wind");
var cityUV = $("#uv");

var APIKey = "f0b02fab26617617b2432ba827c42fc0";


//when search is clicked
function searchBar() {
    makeRequest(search);
}

//then get val from search input

function getWeather (search) {
    
    //build url for first API req
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
    //make req to URL with jquery ajax call

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(res) {
        console.log(res);
        console.log(queryURL);
    });
    
    //start render data 
    //get lat and long out of response object
}
