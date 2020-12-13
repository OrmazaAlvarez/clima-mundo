const axios = require('axios');
let apiKey = '29e392191139af6aefee6809f24f79e9';

const getClima = async(city) => {
    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${city.id}&appid=${apiKey}&units=metric`);
    if (result.data.length === 0) {
        throw new Error(`The climate of ${city.name} could not be determined.`)
    } else {
        return `The climate of ${city.name} is ${result.data.main.temp} ºC.`
    }
};

module.exports = { getClima }