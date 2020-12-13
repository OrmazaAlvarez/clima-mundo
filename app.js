const argv = require('./config/yargs').argv;

const { getLugarLatLng } = require('./lugar/lugar');

const { getClima } = require('./clima/clima')

getLugarLatLng(argv.direccion)
    .then(result => {
        console.log(result)
        getClima(result)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    })
    .catch(err => console.log(err));