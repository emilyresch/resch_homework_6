//HW 6///

//BASIC REQUIREMENTS
//begin with form - input space for name of city and a submit button, and a "last searched" area (search history from local storage)
//Layout will include form on one half of page (html) and appended results/info 
//on other half via js
//open weather key - 69f2b66e6c9854ab3784dbb114768257

//FILES REQUIRED
//will need files for html, js and css 

//HTML FILE
//html will have links to outside libraries/stylesheets etc
//will need weather dashboard with form inputs - search bar; form control: type=text 
//need space for info to be appended and space for search history 

//JS FILE
//Update right side of screen with appropriate info 
//data from openweather - AJAX call
//do an ajax search call on whatever is typed into search bar 
//form validation
//make ajax request - traverse response to find information we need 
//append CURRENT button and FUTURE button - both will need similar onclick events 
//depending on which the user clicks, find appropriate information: 
//key info - name, date, *weather icon*, temp, humidity, wind speed, UV index
//weather icons - potentially in an array based on weather conditions
//UV index - will determine color displayed (favorable, moderate, severe)
//append correct information to html 
//save search to localStorage as value within a history object (we will need this for the search history and for the "last searched")
//append search history to page (as clickable buttons) 
//show current and future weather conditions for that city

//CSS FILE

///////////////////////////////////////////////START!

//upon pageload, getItem to show search history
//append search history as button to html 

//need variables to save search input in 
//search button onclick event
$(document).ready(function () {

    //making current and future buttons
    var currentBtn = $("<button>").attr("id", "current-btn");
    currentBtn.text("See Current Weather");
    currentBtn.attr("class", "btn btn-primary");
    var futureBtn = $("<button>").attr("id", "future-btn");
    futureBtn.text("See Future Forecast");
    futureBtn.attr("class", "btn btn-primary");
    var forecast = $(".weather-info");
    forecast.append(currentBtn);
    forecast.append(futureBtn);

    //grab user input value

    $("#search-button").on("click", function (e) {
        e.preventDefault();
        var city = $("#city-input").val().trim();
        console.log(city);

    })



    //need to validate - make sure city is correct and also not numbers etc
    //search button needs an onclick event that will create two buttons inside of the forecast div - current and future

    //need a current button and future button onclick event listener

    $("#current-btn").on("click", currentWeather);
    $("#future-btn").on("click", futureWeather);


    //global scope variables: weather images array, search input, 

    //if current button is pressed:
    //need to empty out whatever info is in the forecast div (likely future info)

    /////AJAX call for CURRENT
    //need query URL to search for the city - create url with city and api key
    //make ajax call and then function() {
    //inside of function: 
    function currentWeather() {

        var city = $("#city-input").val().trim();
        var queryURL = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=69f2b66e6c9854ab3784dbb114768257";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response.name);
            var temp = ((response.main.temp - 273.15)*1.8) + 32; //need to convert to farenheit
            console.log(temp.toFixed(2)); 
            console.log(response.main.humidity);
            console.log(response.wind.speed);


        })

    }


    function futureWeather() {

    }
    //console.log/test out the object response
    //find information needed in CURRENT forecast
    //if/else statements to determine the weather image (if not provided in object response)
    //if/else statement to determine UV index image and rating 
    //append appropriate information to forecast div
    //save all information to localStorage with setItem
    //eg: 
    // city: name
    // date: 1/01/10
    // temp: 56
    // humidity: 40% ...etc...
});

//if future button is pressed:
//need to empty out info inside this div and replace with new info
////AJAX call for FUTURE


//city name needs to become the argument for the search history buttons