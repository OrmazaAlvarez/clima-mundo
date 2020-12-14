const axios = require('axios');
require('colors')

const getClima = async(city) => {
    const apiKey = require('../apikey/apikey').getApikey();
    if (!apiKey.key) throw new Error(`No se puede usar el servicio web por que aun no ha guardado el ApiKey`);
    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${city.id}&appid=${apiKey.key}&units=metric`);
    if (result.data.length === 0) {
        throw new Error(`The climate of ${city.name.red} could not be determined.`)
    } else {
        return `The climate of ${city.name.green} is ${result.data.main.temp} ºC.`
    }
};

module.exports = { getClima }