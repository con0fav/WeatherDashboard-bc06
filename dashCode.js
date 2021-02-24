// // WeatherAPIKey API AJAX CALL
// function weatherAPI (city) {
//   // var cityEl = city
//   // cityEl = cityEl.replace(" " , "_");
//   // console.log(cityEl);
//   var WeatherAPIKey = "";
//   var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + WeatherAPIKey;
//   console.log(weatherURL);
   
//   $.ajax({ 
//     url: weatherURL, 
//     method: "GET" 
//   }).then(function(response) {
//     console.log(response)
//     var tempF = (response.main.temp);          
//     $("#weatherData").text("Temperature: " + tempF.toFixed(0)+"°");  
//     var imageURL = response.weather[0].icon;
//     var iconImg = $("<img>").attr("src","http://openweathermap.org/img/wn/"+imageURL+"@2x.png");
//           console.log(imageURL)
//     $("#weatherData").append(iconImg) 
//     $("#citySearchBtn").on("click", function(event) {
//       event.preventDefault();  
//     });    
//   });
// };

var search = document.querySelector();
var result = document.querySelector();
var fiveDay = document.querySelector();


var APIKey = "";
//API KEY GOES ABOVE

var openwURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;


$.ajax({
    url: queryURL,
    method: "GET"
})
.then(function(res) {
    console.log(res);
    console.log(queryURL);
});