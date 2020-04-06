//HW 6///

//BASIC REQUIREMENTS

//begin with form - input space for name of city and a submit button. 
//Layout will include form on one half of page (html) and appended results/info 
//on other half via js

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
    //key info - name, date, *weather icon*, temp, humidity, wind speed, UV index
    //weather icons - potentially in an array based on weather conditions
    //UV index - will determine color displayed (favorable, moderate, severe)
//append correct information to html 
//save search to localStorage as value within a history object
//append search history to page (as clickable buttons)

//CSS FILE

//ACCEPTANCE CRITERIA
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast