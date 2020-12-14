const fs = require('fs');
require('colors')
const setApikey = (key) => {
    return new Promise((resolve, reject) => {
        let apikey = [{ key: key }];
        fs.writeFile('data/apikey.json', JSON.stringify(apikey), (err) => {
            if (err) reject(err);
            else resolve(`Api Key saved`.green);
        });
    });
};

const getApikey = () => {
    let apikeys = require('../data/apikey.json')
    if (apikeys.length > 0) return apikeys[0];
    else return { key: undefined };
};

module.exports = { setApikey, getApikey };