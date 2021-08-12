// ES6 en 2015

/**
 * 
 * Parámetros por defecto
 * 
 */

function newFunction(name, age, country) {
    var name = name || 'Sebastian';
    var age = age || 24;
    var country = country || 'Perú';

    console.log(name, age, country);
}

newFunction('Drake');

/**
 * es6 
 */

function newFunctionWithEs6(name = 'Fernando', age = '20', country = 'Perú') {
    console.log(name, age, country);
}

newFunctionWithEs6();
newFunctionWithEs6('Cristina', 49);
newFunctionWithEs6('Jose', 48, 'Peru');


/**
 * Literal templates
 * 
 */

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;

console.log(epicPhrase);

/**
 * es6 
 */
let epicPhrase2 = `${hello} ${world}`;

console.log(epicPhrase);

/**
 * Multilineas
 * 
 */

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n"
    + "In hac habitasse platea dictumst. Nulla facilisi. ";

console.log(lorem);

let newLorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit
In hac habitasse platea dictumst. Nulla facilisi.
`

console.log(newLorem);

/**
 * Desestructuración
 * 
 */
let person = {
    name: 'Fernando',
    age: 20,
    country: 'Perú'
};

console.log(person.name, person.age, person.country);
console.log(person);

// let { name, age, country } = person;
// console.log(name, age, country);

let { name, age } = person;
console.log(name, age);

/**
 * 
 * Spread Operator
 * 
 */

let team1 = ['Paolo', 'André', 'Gianluca'];
let team2 = ['Sergio', 'Christian', 'Yoshimar'];

let education = ['Luis', ...team1, ...team2];

console.log(team1); // ['Paolo', 'André', 'Gianluca']
console.log(team2); // ['Sergio', 'Christian', 'Yoshimar']
console.log(education); // ['Luis', 'Paolo', 'André', 'Gianluca', 'Sergio', 'Christian', 'Yoshimar']
console.log(...team1); // 'Paolo' 'André' 'Gianluca'

/**
 *  Repaso de CONST y LET (Block scope) y VAR (Global scope)
 */

{
    var globalVar = 'Global VAR';
}

{
    let globalLet = 'GLobal LET';
    console.log(globalLet);
}

console.log(globalVar);
// console.log(globalLet); //ReferenceError: globalLet is not defined

const a = 'b';
// a = 'c'; //TypeError: Assignment to constant variable.



// ------------------------------------------------------------------------------------------


/**
 * Inicializador de objetos en ES6
 */

let name2 = 'Sebastian';
let age2 = 24;

obj = { name: name2, age: age2 }; //es5
obj2 = { name2, age2 }; //es6 o es2015

console.log('es5', obj);
console.log('es6', obj);


/**
 * 
 * Arrow Functions
 * 
 */

const names = [
    { name: 'Sebastian', age: 24 },
    { name: 'André', age: 25 },
    { name: 'Gianluca', age: 26 }
];

let listOfNames = names.map(function (item) { // función anónima
    return item.name
});

console.log(listOfNames);

let listOfNamesEs6 = names.map(item => item.name); // función de flecha

console.log(listOfNamesEs6);

/**
 * Las funciones flechas no tienen su propio 'this'
 * Does not have its own bindings to this or super, and should not be used as methods.
 */

const listOfNames2 = (name, age, country) => {
    // whatever ....
};

const square = num => num * num;
console.log(square(5));

/**
 *
 * Promises (o Promesas) 
 * 
 * Something will happen, and it will happen asynchronously.
 */

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey, everything is ok');
        } else {
            reject('Error');
        }
    });
}

helloPromise()
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


// ---------------------

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sumar(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sumar(3, 2));

// import de ES6 aún no es una sintaxis oficial
// en NodeJs, al tratar de correrlo nos arrojará un error
// import { helloFromModule } from './module.js';

const helloFromModule = require('./module');
console.log(helloFromModule());