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

function find(c){
    for (var i=0; i<cityArray.length; i++){
        if(c.toUpperCase()===cityArray[i]){
            return -1;
        }
    }
    return 1;
}

//when search is clicked
function searchBar(event) {
    event.preventDefault();
    if (searchCity.val().trim()!=="") {
        city=searchCity.val().trim();
        getWeather(city);
    }
    // makeRequest(search);
}

//then get val from search input

function getWeather(city) {
    
    //build url for first API req
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
    //make req to URL with jquery ajax call

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(res) {
        console.log(res);

        var icon = res.weather[0].icon;
        var iconCall = "https://openweathermap.org/img/wn/"+ icon +"@2x.png";

        var date = new Date(res.dt*1000).toLocaleDateString();

        $(currentCity).html(res.name + "("+date+")" + "<img src="+iconCall+">")

        var temp = res.main.temp;
        $(cityTemp).html(temp+"&#8457");

        $(cityHumidty).html(res.main.humidity+"%");

        var ws = res.wind.speed;
        $(cityWind).html(ws);

    });
    
    //start render data 
    //get lat and long out of response object
}

$("searchButton").on("click", getWeather);