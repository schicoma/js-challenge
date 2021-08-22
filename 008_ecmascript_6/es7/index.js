// ES7 en 2016

let numbers = [1, 2, 3, 7, 8];

if (numbers.includes(7)) {
    console.log('7 is in the array');
}

if (!numbers.includes(4)) {
    console.log('4 is not in the array');
}

//

let base = 4;
let exponent = 3;
let result = base ** exponent;

console.log(`${result} es igual a ${Math.pow(4, 3)}`);