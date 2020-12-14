const argv = require('yargs').options({
        cityname: {
            alias: 'c',
            desc: 'Nombre de la ciudad o pais que se va obtener el clima',
            demand: true
        },
        savekey: {
            alias: 's',
            desc: 'Gurada el ApiKey de autorización para usar el la api del Clima'
        }
    }).help()
    .argv;

module.exports = { argv };