const axios = require('axios');
let apiKey = '29e392191139af6aefee6809f24f79e9';

const getClima = async(city) => {
    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${city.id}&appid=${apiKey}&units=metric`);
    if (result.data.length === 0) {
        throw new Error(`No hay resultados para ${city.name}`)
    }
    /* const coord = result.data.coord;
    const weather = result.data.weather[0]; */
    return result.data.main
};

module.exports = { getClima }