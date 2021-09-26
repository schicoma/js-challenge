/**
 * Sintáxis de require.js
 */

const modulo = require('./saludar'); // sin extensión

console.log(modulo);
// modulo(); // module.exports = saludar;
modulo.saludar();
console.log(modulo.prop1);
