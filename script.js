var APIKey = "f0b02fab26617617b2432ba827c42fc0";

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;

//when search is clicked
function searchCity() {
    makeRequest(search);
}

//then get val from search input

function makeRequest (search) {

    //build url for first API req
    //make req to URL with jquery ajax call
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(res) {
        console.log(res)
    });
        //start render data 
        //get lat and long out of response object

        //make oneCall request and pass in lat, long
        //https://openweathermap.org/forecast5
        //https://openweathermap.org/api/one-call-api



}

//openweather onecall request
function oneCall(lat, lng) {
    
    $.ajax(queryURL).then(function(res){
        //finish rendering data
    })

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