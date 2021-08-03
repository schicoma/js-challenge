// const precioOriginal = 80;
// const porcentajeDescuento = 25;

function calcularPrecioConDescuento(precio, descuento) {
    // single line responsability statement
    const descuentoMonetario =  (precio * descuento / 100);
    return precio - descuentoMonetario;
}

console.log(calcularPrecioConDescuento(80, 25));

// console.log({
//     precioOriginal, 
//     porcentajeDescuento, 
//     descuento,
//     porcentajePrecioConDescuento
// });