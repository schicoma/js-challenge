const os = require('os');

console.table(os.cpus()); // Array de info de las cpus 
// console.log('IP Address', os.networkInterfaces().lo.map(i => i.address)); //  Direcciones IP de lo
// console.log('Free memory', os.freemem() / 1024 / 1024 / 1024); //  Memoria disponible (en GB)
// console.log('Type', os.type()); //  Linux
// console.log('OS Version', os.release());
// console.log('User info', os.userInfo());