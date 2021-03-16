var city="";

var searchCity = $("#searchCity");
var searchButton = $("#searchButton");
var clearButton = $("#clearButton");
var currentCity = $("#currentCity");
var cityTemp = $("#temperature");
var cityHumidty = $("#humidity");
var cityWind = $("#wind");
var cityUV = $("#uv");
var date = $("#date");
var fiveDayCards = $("#dailyForecast");
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

        cityTemp.text(res.main.temp);
        cityHumidty.text(res.main.humidity);
        cityWind.text(res.wind.speed);

        lat = res.coord.lat;
        lon = res.coord.lon;

        //using onecall api for uv index

        var oneCallQueryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&units=imperial&appid="+ APIKey;
        
        $.ajax({
            url: oneCallQueryURL,
            method: "GET"
        })
        .then(function(oneCallRes) {
            console.log(oneCallRes);

            cityUV.text(oneCallRes.current.uvi);

            //render cards here

            for (let i = 0; i < 5; i++) {
                var dailyForecast = oneCallRes.daily[i];

                var cardDiv = $('<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">');
                
                var cardBody = $('<div class="card-body">');

                var cardDate = $('<p class="card-text">');

                var cardIcon = $('<img>').attr("src", "" + dailyForecast.weather[0].icon + ".png");

                var cardTemp = $('<p class="card-text">').text("Temperature:" + dailyForecast.temp.day);

                var cardHum = $('<p class="card-text">').text("Humidity:" + dailyForecast.humidity);

                cardBody.append(cardDate, cardIcon, cardTemp, cardHum);
                cardDiv.append(cardBody);

                fiveDayCards.append(cardDiv);
            }      

        })
    
    
        // var fiveDayQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + APIKey;
        
        // $.ajax({
        //     url: fiveDayQueryURL,
        //     method: "GET"
        // })
        // .then(function(fiveDayRes) {
        //     console.log(fiveDayRes)



        // });
    
    });

}

// function oneCall(city) {

// }

// function fiveDay(city) {

// }

$("#searchButton").on("click", function(event) {
    event.preventDefault();

    var cityResult = searchCity.val().trim();

    getWeather(cityResult);
    // oneCall(cityResult);
    // fiveDay(cityResult);

})


function clear() {
    $("#searchCity").empty();
}

$("#clearButton").on("click", clear);
