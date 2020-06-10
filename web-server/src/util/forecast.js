const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=353f7cac5cc67f66c6691e62e303d09a&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        } else if ( body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0]  + 'it is current ' + body.current.temperature + ' degrees out. There is a ' + body.current.feelslike + ' degress out')
        }
    })
}

module.exports = forecast