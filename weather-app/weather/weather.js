const request = require('request');
var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksk{y.net/forecast/5742dd2e79302d55dcde59098ae34833/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if(error) {
            callback('Unable to connect servers');
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather');
        } else if (response.statusCode === 200) {
            callback(undefined , {
                temparature :body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
};

module.exports.getWeather = getWeather;
  