function alturaTriangulo(hipotenusa, base) {
    const cateto = (base / 2);
    const altura = Math.sqrt(hipotenusa * hipotenusa - cateto * cateto);

    return altura;
}

function calcularAlturaTriangulo() {
    const inputTrianguloLado1 = document.getElementById('InputTrianguloLado1');
    const lado1 = parseFloat(inputTrianguloLado1.value);

    const inputTrianguloLado2 = document.getElementById('InputTrianguloLado2');
    const lado2 = parseFloat(inputTrianguloLado2.value);

    const inputTrianguloLado3 = document.getElementById('InputTrianguloLado3');
    const lado3 = parseFloat(inputTrianguloLado3.value);

    // validar si es triángulo isósceles
    let base;
    let altura;

    if (lado1 == lado2) {
        base = lado3;
        altura = alturaTriangulo(lado1, base);
    } else if (lado1 == lado3) {
        base = lado2;
        altura = alturaTriangulo(lado1, base);
    } else if (lado2 == lado3) {
        base = lado1;
        altura = alturaTriangulo(lado2, base);
    } else {
        alert('No se puede calcular la altura')
        return;
    }

    alert(`La altura del triángulo es ${altura}cm`)

}