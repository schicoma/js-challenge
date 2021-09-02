let saludo = 'Hola';

console.log(saludo);

let nombre = process.env.NOMBRE || 'Sin nombre';
let email = process.env.MY_EMAIL || 'Sin correo electrónico';

console.log(`${saludo} ${nombre}`);
console.log(`Mi correo es ${email}`);