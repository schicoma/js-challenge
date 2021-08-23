// Ejemplo 1

const somethingWillHappen = (condition) => {
    // Promise recibe dos argumentos
    return new Promise((resolve, reject) => {

        // Llamamos a la función que se encargará de hacer algo
        // y la devolvemos como una promesa
        if (condition) {
            resolve('Hey :)');
        } else {
            reject('Whooops!!! :C');
        }

    });
};

somethingWillHappen(true)
    .then(response => console.log(response))
    .catch(error => console.log(error));

somethingWillHappen(false)
    .then(response => console.log(response))
    .catch(error => console.log(error));


// Ejemplo 2

const somethingWillHappen2 = (condition) => {
    return new Promise((resolve, reject) => {
        if (condition) {
            setTimeout(() => {
                resolve('True');
            }, 2000);
        } else {
            const error = new Error('False');
            reject(error);
        }
    });
};


somethingWillHappen2(true)
    .then(response => console.log(response))
    .catch(error => console.error(error));

somethingWillHappen2(false)
    .then(response => console.log(response))
    .catch(error => console.error(error));


// Ejemplo 3

Promise.all([somethingWillHappen(true), somethingWillHappen2(true)])
    .then(response => {
        console.log('Array of results:', response);
    })
    .catch(error => {
        console.error(error);
    });