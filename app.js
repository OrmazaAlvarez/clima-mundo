const argv = require('./config/yargs').argv;
const { getLugarLatLng } = require('./lugar/lugar');

const getInfo = async(cityname) => {
    try {
        const { getClima } = require('./clima/clima');
        let city = await getLugarLatLng(cityname)
        return await getClima(city);
    } catch (error) {
        return error;
    }
};

const saveKey = async(key) => {
    try {
        const { setApikey } = require('./apikey/apikey');
        return await setApikey(key);
    } catch (error) {
        return error;
    }
}

const checkeComando = async() => {
    let result;
    if (argv['savekey']) {
        result = await saveKey(argv.savekey);
        if (result.includes('saved')) {
            result = `${result.green}\n${await getInfo(argv.cityname)}`;
        }
    }
    if (!result) {
        return await getInfo(argv.cityname);
    } else {
        return result
    }
}

checkeComando()
    .then(console.log)
    .catch(console.log);