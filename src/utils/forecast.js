const request = require('request')

const getWeather = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/67b8e67c2b8f33782fda151016230f55/'+latitude + ','+longitude

    request({url: url, json: true}, (error, response) =>{
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if(response.body.error){
            callback('Unable to find location', undefined)
        }else {
            callback(undefined, {
                data: response.body.currently
            })
        }
    })

}

module.exports = getWeather
