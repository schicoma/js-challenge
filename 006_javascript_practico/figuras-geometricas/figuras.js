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