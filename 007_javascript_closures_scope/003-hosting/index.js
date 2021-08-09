/**
 *  Hoisting: declaración de variables y funciones se elevan
 */ 
a = 2;
var a;
console.log(a); // 2

// ----------------------

console.log(b); // undefined
var b = 1;

function nameOfDog(name) {
    console.log(name);
}

nameOfDog('Drake'); // Drake

// ----------------------

nameOfDog('Kitty'); // Kitty

function nameOfCat(name) {
    console.log(name);
}
