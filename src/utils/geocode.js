const request = require('request')

const geocode = (location, callback) => {
    const addressUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(location) +'.json?bbox=-77.083056,38.908611,-76.997778,38.959167&access_token=pk.eyJ1IjoiaXR6bWV2aXNodSIsImEiOiJjazNkNXo1Z2IwazZ0M2NudjJrODVkYnA1In0.PF6udKIFLY_96RKreggMTg&limit=1'
    request({url: addressUrl, json: true}, (error, response) =>{
        if(error) {
            callback('Unable to connect to location services!', undefined)
        } else if(response.body.features.length === 0){
            callback('Unable to find location. Try another search.', undefined)
        }else {
            const latitude = response.body.features[0].center[1]
            const longitude = response.body.features[0].center[0]
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })

        }
    })

}

module.exports = geocode
