const getLugarLatLng = (direccion) => {
    return new Promise((resolve, reject) => {
        try {
            let listCity = require('../data/citylist.json');
            let city = listCity.filter(city => city.name.includes(direccion));
            if (city.length === 0) {
                reject(`No data found for ${direccion}.`);
            } else {
                resolve({
                    id: city[0].id,
                    name: city[0].name
                });
            }
        } catch (error) {
            reject(`Failed to conect to data service.\n ${error}`);
        }
    });
};

module.exports = { getLugarLatLng };