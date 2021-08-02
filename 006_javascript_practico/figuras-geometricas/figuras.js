// Código del cuadrado

console.group("Cuadrados")

// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

function perimetroCuadrado(lado) {
    return lado * 4;
}

// console.log(`El perímetro del cuadrado es: ${perimetroCuadrado}cm`);

function areaCuadrado(lado) {
    return lado * lado;
}

// console.log(`El área del cuadrado es: ${areaCuadrado}cm^2`);

console.groupEnd();

// Código del triángulo

console.group("Triángulos")

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("Los lados del triángulo miden: "
//     + `${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${baseTriangulo}cm`);
//
// const alturaTriangulo = 5.5
// console.log(`La altura del triángulo es: ${alturaTriangulo}cm`);

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

// console.log(`El perímetro del triángulo es: ${perimetroTriangulo}cm`);

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// console.log(`El área del triángulo es: ${areaTriangulo}cm^2`);

console.groupEnd();

// Código del círculo

console.group("Círculos")

// //const PI = 3.1416;
// const PI = Math.PI
// const radioCirculo = 4;
// console.log(`El radio del círculo es: ${radioCirculo}cm`);

function diametroCirculo(radio) {
    return radio * 2;
}
// console.log(`El diametro del círculo es: ${diametroCirculo}cm`);

function perimetroCirculo(radio) {
    return diametroCirculo(radio) * Math.PI;
}

// console.log(`El perímetro del círculo es: ${perimetroCirculo}cm`);

function areaCirculo(radio) {
    return (radio * radio) * Math.PI;
}

// console.log(`El área del círculo es: ${areaCirculo}cm^2`);

console.groupEnd();


// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const inputCuadrado = document.getElementById('InputCuadrado');
    const lado = parseFloat(inputCuadrado.value);
    const perimetro = perimetroCuadrado(lado);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const inputCuadrado = document.getElementById('InputCuadrado');
    const lado = parseFloat(inputCuadrado.value);
    const area = areaCuadrado(lado);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const inputTrianguloLado1 = document.getElementById('InputTrianguloLado1');
    const lado1 = parseFloat(inputTrianguloLado1.value);
    
    const inputTrianguloLado2 = document.getElementById('InputTrianguloLado2');
    const lado2 = parseFloat(inputTrianguloLado2.value);
    
    const inputTrianguloBase = document.getElementById('InputTrianguloBase');
    const base = parseFloat(inputTrianguloBase.value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const inputTrianguloBase = document.getElementById('InputTrianguloBase');
    const base = parseFloat(inputTrianguloBase.value);

    const inputTrianguloAltura = document.getElementById('InputTrianguloAltura');
    const altura = parseFloat(inputTrianguloAltura.value);

    const area = areaTriangulo(base, altura);
    alert(area)
}

function calcularPerimetroCirculo() {
    const inputCirculo = document.getElementById('InputCirculo');
    const radio = parseFloat(inputCirculo.value);
    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const inputCirculo = document.getElementById('InputCirculo');
    const radio = parseFloat(inputCirculo.value);
    const area = areaCirculo(radio);
    alert(area);
}