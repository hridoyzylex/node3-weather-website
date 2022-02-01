const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=17acbcf658696d042fe935d1bbf887d0&query=' + latitude + ',' + longitude// + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback(body.error.info, undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degree celcius, but it actually feels like ' + body.current.feelslike + ' degree celcius. The humidity is ' + body.current.humidity + '%')
        }
    })
}

module.exports = forecast