const axios = require('axios');

const argv = require('./config/yargs').argv;
let apiKey = '29e392191139af6aefee6809f24f79e9';

const instance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${argv.direccion}`
});

instance.get()
    .then(result => console.log(result.data))
    .catch(error => console.log(`Error!!! ${error}`));