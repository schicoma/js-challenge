// es10 en 2019

let array = [[1, 2, 3], [4, 5, 6], [7, [8, 9]]];

console.log(array.flat()); // [1,2,3,4,5,6,7, [8,9] ]
console.log(array.flat(2)); // [1,2,3,4,5,6,7,8,9]

let anotherArray = [1, 2, 3, 4, 5];

console.log(anotherArray.flatMap(value => [value, value * 2])); // [ 1, 2, 2, 4,  3, 6, 4, 8, 5, 10 ]

// ------------------

/**
 * 
 * Trims
 */

let hello = '       hello world    ';
console.log(hello, '1');
console.log(hello.trim(), '1');
console.log(hello.trimStart(), '1');
console.log(hello.trimEnd(), '1');

// ----------------------------------

/**
 * 
 * error implícito en el catch
 */

// before es10
try {
    throw Error('hola')
} catch (error) {
    console.log(error);
}

// after es10
try {
    throw Error('hola again')
} catch { // error es opcional
    console.log('ocurrió un error');
}

// ----------------------

let entries = [['name', 'Sebastian'], ['age', 24]];

console.log(Object.fromEntries(entries));

// ... is same as ..

let map = {};
entries.forEach(element => map[element[0]] = element[1]);
console.log(map);

// ------------------

let mySymbol = `My symbol`;
let symbol = Symbol(mySymbol);
let symbol2 = Symbol({});
let symbol3 = Symbol(['holi', 'boli']);

console.log(symbol.description);
console.log(symbol2.description);
console.log(symbol3.description);
