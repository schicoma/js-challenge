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

function getPriceWithDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const price = parseFloat(inputPrice.value);

    const inputDiscount = document.getElementById("InputDiscount");
    const discount = parseFloat(inputDiscount.value);

    const total = calcularPrecioConDescuento(price, discount);
    // alert(`El precio con descuento es: ${total}`);

    const resultP = document.getElementById("result");
    resultP.innerHTML = `El precio con descuento es: $${total}`;
}