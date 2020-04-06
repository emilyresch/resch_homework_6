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

//ACCEPTANCE CRITERIA

// THEN I am again presented with current and future conditions for that city
// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast