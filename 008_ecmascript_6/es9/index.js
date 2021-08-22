// ES9 en 2018

/**
 * Operador de reposo
 * 
 */

const obj = {
    name: 'Sebastian',
    age: 24,
    country: 'PE'
};

let { name, ...all } = obj;

console.log(obj); // keeps with its atributes
console.log(name, all) // 'Sebastian' { age: 24, country: 'PE' }

/**
 * Finally in promises
 * 
 */ 

 const helloPromise = (condition) => {
    return new Promise((resolve, reject) => {
        if (condition) {
            resolve('Hey, everything is ok');
        } else {
            reject('Error');
        }
    });
}

helloPromise(false)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })

    // In ES9
    .finally(_ => {
        console.log('Finally');
    });


// ----------------------

/**
 * 
 * Mejoras en REGEX
 * 
 */

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');

const year = match[1];
const month = match[2];
const day = match[3];

console.log({year, month, day}) //{ year: '2018', month: '04', day: '20' }