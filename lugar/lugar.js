const getLugarLatLng = (direccion) => {
    return new Promise((resolve, reject) => {
        let listCity = require('../data/citylist.json');
        if (!listCity || listCity.lenth === 0) {
            reject("No se pudieron obtener los datos")
        } else {
            let city = listCity.filter(city => city.name.includes(direccion));
            if (!city) {
                reject(`La ciudad ${direccion} no fue encontrada`);
            } else {

                resolve({
                    id: city[0].id,
                    name: city[0].name
                });
            }
        }
    })
};

module.exports = { getLugarLatLng };