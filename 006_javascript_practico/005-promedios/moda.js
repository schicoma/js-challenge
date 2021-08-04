const list1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    2,
    1,
];


function calculateMode(list) {
    const count = {};

    list.map(function (element) {
        if (!count[element]) {
            count[element] = 0;
        }
    
        count[element]++;
    });
    
    // Convertir atributos en 'objetos' (arrays) y
    // ordenar de mayor a menos por la cantidad de ocurrencias
    
    const countToArray = Object.entries(count).sort(function (a, b) {
        return b[1] - a[1];
    });
    
    return parseInt(countToArray[0][0]);
}

console.log(calculateMode(list1));