/**
 * ECMAScript 6
 * 
 * A partir de la version 13, esto deja de ser experimental.
 * 
 * De la versión 12 para abajo, utilizar el flag --experimental-modules
 */

import modulo from "./saludar.mjs";

// saludar(); // export default saludar;
modulo.saludar();
console.log(modulo.prop2);
