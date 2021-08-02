// No se puede utilizar una variable definida con let antes de 
// ser declarada.

try {
    console.log(nombre);
    let nombre = 'Sebastian';
} catch (e) {
    console.log("La variable 'nombre' no está definida");
}


// ---------------------------
// Si la variable fue definida con var o es una función declarativa,
// puede ser llamada antes de ser declarada. Retornará undefined.

console.log(nombre2);
var nombre2 = 'Sebastian';

