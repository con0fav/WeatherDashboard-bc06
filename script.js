//api key f0b02fab26617617b2432ba827c42fc0

//when search is clicked
function searchBar() {
    makeRequest(search);
}

//then get val from search input

function makeRequest (search) {

    //build url for first API req
    //make req to URL with jquery ajax call

    $.ajax(queryURL).then(function(res){
        //start render data 
        //get lat and long out of response object

        //make oneCall request and pass in lat, long
        //

    })

}

//openweather onecall request
function oneCall(lat, lng) {
    
    $.ajax(queryURL).then(function(res){
        //finish rendering data
    })

}