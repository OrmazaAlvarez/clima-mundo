const argv = require('./config/yargs').argv;

const { getLugarLatLng } = require('./lugar/lugar');

getLugarLatLng(argv.direccion)
    .then(result => console.log(result))
    .catch(err => console.log(err));