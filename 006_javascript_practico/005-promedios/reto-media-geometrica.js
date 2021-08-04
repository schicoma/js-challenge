let porcentajeRentabilidad = [
    20,
    25,
    15,
    16,
    43,
    20
]

porcentajeRentabilidad = porcentajeRentabilidad.map(function(elemento) {
    return (elemento / 100) + 1
});

console.log(porcentajeRentabilidad);

let producto = 1;

porcentajeRentabilidad.forEach(function(elemento) {
    producto *= elemento;
});

const cantidadElementos = porcentajeRentabilidad.length;
const mediaGeometrica = Math.pow(producto, 1/ cantidadElementos);

console.log(mediaGeometrica);