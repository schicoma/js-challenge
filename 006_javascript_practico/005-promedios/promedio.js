const lista = [
    1001, 2010, 4305, 4400
];

function calcularMediaAritmetica(lista) {
    // let suma = 0;

    // for (let elemento of lista) {
    //     suma += elemento;
    // }

    const suma = lista.reduce(function(valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    });

    const promedio =  suma / lista.length;
    return promedio;

}

console.log(calcularMediaAritmetica(lista));
