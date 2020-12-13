const argv = require('./config/yargs').argv;

const { getLugarLatLng } = require('./lugar/lugar');

const { getClima } = require('./clima/clima')


const getInfo = async(direccion) => {
    try {
        return temp = await getClima(await getLugarLatLng(direccion));
    } catch (error) {
        return error;
    }
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);