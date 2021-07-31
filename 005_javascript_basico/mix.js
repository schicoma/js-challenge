var objeto = {};

// objeto

var miAuto = {
    // propiedades
    marca: 'Ford',
    modelo: 'Mustang',
    year: 1964,
};

console.log(miAuto);
console.log(miAuto.marca);

// función
// this: variable que hace referencia al objeto

miAuto.detalleDelAuto = function () {
    console.log(`Auto ${this.modelo} ${this.year}`);
}

miAuto.detalleDelAuto();

// objeto con constructor (Función constructora)

function Auto(marca, modelo, year) {
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
}

var autoNuevo = new Auto('Toyota', 'Corolla', '2019');
var miAutoNuevo = new Auto('Tesla', 'Model 3', '2025');

console.log(miAutoNuevo);

// loops

let autos = [];

while (autos.length < 30) {
    autos.push(new Auto('Tesla', `Model 3 (${autos.length + 1})`, '2025'));
}

console.log(autos.length);

// Recorrido de un array
var articulos = [
    { nombre: 'Laptop', precio: 1000 },
    { nombre: 'Mouse', precio: 50 },
    { nombre: 'Monitor', precio: 500 },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Audífonos', precio: 200 },
    { nombre: 'Webcam', precio: 300 },
    { nombre: 'Impresora', precio: 400 }
];

// (1) filter

var articulosFiltrados = articulos.filter(function (articulo) { 
    return articulo.precio <= 400
});

console.log(1, articulosFiltrados);

// (2) map

var nombreArticulos = articulos.map(function (articulo) {
    return articulo.nombre
});

console.log(2, nombreArticulos);

// (3) find

var articuloEncontrado = articulos.find(function(articulo) {
    return articulo.nombre === 'Laptop'
});

console.log(3, articuloEncontrado);

// (4) forEach

articulos.forEach(function(articulo) {
    console.log(4, articulo.nombre);
});

// (5) some

var articulosBaratos = articulos.some(function(articulo) {
    return articulo.precio <= 300
});

// si hay algun artículo barato (precio <= 300), devuelve true

console.log(5, articulosBaratos);