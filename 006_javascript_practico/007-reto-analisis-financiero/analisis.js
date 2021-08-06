// Calcular monto y cantidad cuotas mensuales de una compra con tarjeta de credito,
// a partir del total de la compra y la tasa de interes

// find interesRate in months

function calculateInteresRateInMonths(interesRate) {
    return Math.pow(1 + (interesRate / 100), 1 / 12) - 1;
}

// calculate instalments amount
function calculateInstalmentsAmount(purchaseAmount, instalments, monthlyInteresRate) {
    const num = Math.pow(1 + monthlyInteresRate, instalments) * monthlyInteresRate * purchaseAmount;
    const den = Math.pow(1 + monthlyInteresRate, instalments) - 1;
    return num / den
}

function calculate() {
    const purchaseAmount = Number(document.getElementById('purchaseAmount').value);
    const interesRate = Number(document.getElementById('interesRate').value);
    const instalments = Number(document.getElementById('instalments').value);

    const monthlyInteresRate = calculateInteresRateInMonths(interesRate);

    const instalmentsAmount = calculateInstalmentsAmount(purchaseAmount, instalments, monthlyInteresRate);

    const result = document.getElementById('result');
    result.innerHTML = `La cuota mensual a pagar es: ${(instalmentsAmount).toFixed(2)} por ${instalments} meses`;

}

