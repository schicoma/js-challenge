let lista1 = [3, 60, 10, 5, 4, 80, 303033];

// ordenar lista
lista1 = lista1.sort(function(elementoActual, siguienteElemento){
    return elementoActual - siguienteElemento;
});

console.log(lista1);

const mitadLista = lista1.length / 2;
let mediana;

if (esPar(mitadLista)) {
    const sumaMitades = lista1[mitadLista - 1] + lista1[mitadLista];
    mediana = sumaMitades / 2;
} else {
    // mitad de la lista es la mediana
    const posicion = Math.floor(mitadLista);
    mediana = lista1[posicion];
}
console.log(mediana);

function esPar(numero) {
    return numero % 2 == 0;
}