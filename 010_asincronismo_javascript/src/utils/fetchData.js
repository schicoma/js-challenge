// instanciando XMLHttpRequest
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

/**
 * Trae los datos de la API de RickAndMorty y los devuelve en un objeto JSON
 * 
 */

const fetchData = (url_api) => {

    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        const async = true;

        xhttp.open('GET', url_api, async);
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    resolve(JSON.parse(xhttp.responseText));
                } else {
                    const error = new Error('Error ', url_api);
                    reject(error);
                }
            }
        }

        xhttp.send();
    });

};

// sintaxis de node.js

module.exports = fetchData;