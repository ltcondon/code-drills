var zipcode = process.argv[2];
var apikey = edd92394664e330329ca122112237ee8

    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?units=imperial&zip="+zipcode+",us&APPID="+apikey;

    request(queryURL, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var forecast = JSON.parse(body).list;
            for (var i=0; i < 5; i++) {
                console.log(forecast[i].dt_txt, forecast[i].main.temp)
            }
        }
    })