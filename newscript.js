//current weather button click event
const currentBtn = $("#current-btn");
//5day forecase button click event
const fiveDayBtn = $("#future-btn");
//clear history button
const clearBtn = $("#clear-search");
//array to hold searched cities
let searchedCities = [];

function initialFunc() {
    const cityInfo = JSON.parse(localStorage.getItem('cities'));
    if (cityInfo !== null) {
        searchedCities = cityInfo;
        addToSearchHistory();
    }
}

//current weather 
function getCurrentWeather(e) {
    e.preventDefault();
    saveCity();
    clearWeatherInfo();
    const city = $("#city-input").val().trim();
    // const apiKey = "93b24b7535d1bcb801242f4ebc0659a5"
    const apiKey2 = "69f2b66e6c9854ab3784dbb114768257"
    const queryURL = `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey2}`
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        //find info from response
        const temp = ((response.main.temp - 273.15) * 1.8) + 32;
        const country = response.sys.country;
        const icon = response.weather[0].icon;
        const iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
        //create card in weather-info section
        const weatherInfo = $(".weather-info");
        const $card = $("<div>").attr("class", "card");
        $card.attr("style", "background-color: rgb(255, 220, 125)");
        const $cardbody = $("<div>").attr("class", "card-body");
        const city = $("<h5>").attr("class", "card-title");
        const countryOf = $("<h5>");
        const imageIcon = $("<img>").attr("src", iconURL);
        const tempArea = $("<h4>");
        const humArea = $("<h4>");
        const windSp = $("<h4>");
        //add info to elements
        city.text(response.name);
        countryOf.text(country);
        tempArea.text(temp.toFixed(2));
        humArea.text(response.main.humidity);
        windSp.text(response.wind.speed);
        //append
        weatherInfo.prepend($card);
        $card.append($cardbody);
        $cardbody.append(city);
        $cardbody.append("Country:", countryOf);
        $cardbody.append(imageIcon);
        $cardbody.append(tempArea, "degrees F");
        $cardbody.append(humArea, "% Humidity");
        $cardbody.append(windSp, "mph Winds");

    }).then(function () {
        console.log("added to searched");
        addToSearchHistory();
    });
}

//5day forecast
function getFiveDayForecast(e) {
    e.preventDefault();
    saveCity();
    clearWeatherInfo();
    const city = $("#city-input").val().trim();
    const apiKey2 = "69f2b66e6c9854ab3784dbb114768257"
    const queryURL = `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey2}`
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response.city.name);
        //create cards for next 5 days
        const weatherInfo = $(".weather-info");
        for (let i = 7; i <= 35; i += 7) {
            // console.log(response);
            const temp = ((((response.list[i].main.temp - 273.15) * 1.8) + 32).toFixed(2));
            const humidity = response.list[i].main.humidity;
            const wind = response.list[i].wind.speed;
            const description = response.list[i].weather[0].description;
            const icon = response.list[i].weather[0].icon;
            const cityname = response.city.name;
            // console.log(icon);
            const iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            console.log(response.city);
            const $card = $("<div>").attr("class", "card");
            $card.attr("style", "background-color: rgb(133, 190, 255)");
            const $cardbody = $("<div>").attr("class", "card-body");
            const city = $("<h5>").attr("class", "card-title");
            // const dayNum = $("<h5>");
            const descript = $("<h5>");
            const imageIcon = $("<img>").attr("src", iconURL);
            const tempArea = $("<h4>");
            const humArea = $("<h4>");
            const windSp = $("<h4>");
            //add info to elements
            city.text(cityname);
            descript.text(description);
            tempArea.text(temp);
            humArea.text(humidity);
            windSp.text(wind)
            //append cards
            weatherInfo.append($card);
            $card.append($cardbody);
            $cardbody.append(city);
            $cardbody.append(description);
            $cardbody.append(imageIcon);
            $cardbody.append(tempArea, "degrees F");
            $cardbody.append(humArea, "% Humidity");
            $cardbody.append(windSp, "mph Winds");

        }
    }).then(function () {
        console.log("added to searched");
        addToSearchHistory();
    });

}

//add city to searched cities array as button and append
function addToSearchHistory() {
   
    for (let i = 0; i < searchedCities.length; i++) {
        const searched = $(".search-history");
        const cityBtn = $("<button>").attr("class", "btn btn-primary searched-cities-list").text(searchedCities[i]);
        searched.append(cityBtn);
    }
    $(".searched-cities-list").on("click", clickOnHistory);

}

//push searched city to searchedCities array
function saveCity() {
    const searched = $(".search-history");
    const cityname = $("#city-input").val().trim();
    searchedCities.push(cityname);
    console.log(searchedCities);
    searched.empty();
    addToSearchHistory();
    //set searched array to localstorage
    localStorage.setItem('cities', JSON.stringify(searchedCities));

}


function clickOnHistory(e) {
    e.preventDefault();
    console.log($(this).val());
}

//clear out weather info
function clearWeatherInfo() {
    const weatherInfo = $(".weather-info");
    weatherInfo.empty();
}

//clear search history
function clearHistory() {
    const history = $(".search-history");
    history.empty();
    clearWeatherInfo();
}

initialFunc();
clearBtn.on("click", clearHistory);
fiveDayBtn.on("click", getFiveDayForecast);
currentBtn.on("click", getCurrentWeather);