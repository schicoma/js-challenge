const COUPONS = {
    'JAVASCRI': 10,
    'PLATZIJS': 20,
    'SCHICOMA': 50,
    'SANDMANN': 75,
}


function calcularPrecioConDescuento(precio, descuento) {
    // single line responsability statement
    const descuentoMonetario =  (precio * descuento / 100);
    return precio - descuentoMonetario;
}

function getPriceWithDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const price = parseFloat(inputPrice.value);

    const inputCoupon = document.getElementById("InputCoupon");
    const coupon = inputCoupon.value;

    const discount = COUPONS[coupon] || 0;
    const total = calcularPrecioConDescuento(price, discount);
    
    let resultText = '';

    if (discount> 0) {
        resultText += `Se aplicó un descuento de ${discount}%. `;
    }

    resultText += `El precio con descuento es: $${total}`;

    const resultP = document.getElementById("result");
    resultP.innerHTML = resultText;
}