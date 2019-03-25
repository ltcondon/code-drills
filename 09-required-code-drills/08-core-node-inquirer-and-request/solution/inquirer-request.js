var inquirer = require("inquirer");
var request = require("request");


inquirer.prompt([
    {
      type: "input",
      message: "Which city do you want to see the weather for? ",
      name: "cityname"
    }
  ]).then(function(userChoice) {
      var apikey = "edd92394664e330329ca122112237ee8"
      var queryURL = "http://api.openweathermap.org/data/2.5/weather?units=imperial&APPID="+apikey+"&q="
    request(queryURL + userChoice.cityname, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        var cityWeather = JSON.parse(body);
        console.log(cityWeather.name, cityWeather.sys.country);
        console.log(cityWeather.weather[0].description)
      } else {
        console.log(error)
      }
    })
  })