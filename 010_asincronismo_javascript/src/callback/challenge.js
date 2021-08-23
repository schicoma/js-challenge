// instanciando XMLHttpRequest
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

/**
 * Trae los datos de la API de RickAndMorty y los devuelve en un objeto JSON
 * 
 */

function fetchData(url_api, callback) {
    const xhttp = new XMLHttpRequest();
    const async = true;

    xhttp.open('GET', url_api, async);
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null);
            }
        }
    }

    xhttp.send();
}

fetchData(API, function (error1, data1) {
    // si ocurrió un error
    if (error1) {
        return console.log(error1);
    }

    fetchData(API + data1.results[0].id, function (error2, data2) {
        // si ocurrió un error
        if (error2) {
            return console.log(error2);
        }

        fetchData(data2.origin.url, function(error3, data3) {
            // si ocurrió un error
            if (error3) {
                return console.log(error2);
            }

            console.log(data1.info); // { count: 671, pages: 34, next: 'https://rickandmortyapi.com/api/character/?page=2', prev: null }
            console.log(data2.name); // Rick
            console.log(data3.dimension); // Dimension C-137
        });
    });

});

// Evitar los *callbacks hells*, anidamientos de funciones (callbacks)
// Más de 3 callbacks anidados