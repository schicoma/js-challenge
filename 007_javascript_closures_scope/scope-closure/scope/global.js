// Variable global

var hello = 'Hello';
var hello = 'Hello +';

let world = 'Hello world';
// SyntaxError: Identifier 'world' has already been declared
// let world = 'Hello';

const helloWorld = 'Hello World!';
// SyntaxError: Identifier 'helloWorld' has already been declared
// const helloWorld = 'Hello';

console.log(hello);

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
};

anotherFunction();

const anotherHelloWorld = () => {
    globalVar = 'I\'m global'
}

anotherHelloWorld();

// Mala práctica: Crear variables globales en una función secundaria
console.log(globalVar);

const anotherFunction2 = () => {
    var localVar = globalVar = 'I\'m global, again';
}

anotherFunction2(); 

console.log(globalVar);