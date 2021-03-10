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

var openwURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;

//when search is clicked
function searchBar() {
    makeRequest(search);
}

//then get val from search input

function getWeather (search) {

    //build url for first API req
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

    //make oneCall request and pass in lat, long
    //
}

//openweather onecall request
function oneCall(lat, lng) {
    
    $.ajax(queryURL).then(function(res){
        //finish rendering data
    })

}