// import  colombia  from "./salarios";
const { colombia } = require('./salarios.js')
// console.log(colombia[0]);

const salaries = colombia;

const orderedSalaries = salaries.sort((a, b) => {
    return a.salary - b.salary
});

// console.log(orderedSalaries);

function isOdd(numero) {
    return numero % 2 === 0;
}

function medianOfSalaries(lista) {
    const half = Math.floor(lista.length / 2);

    if (isOdd(lista.length)) {
        return (lista[half - 1].salary + lista[half].salary) / 2;
    } else {
        return lista[half].salary;
    }
}

const generalMedian = medianOfSalaries(salaries);

// top 10% median

const top = 10;
const cantidadTop10 = salaries.length * top / 100;

const top10Salaries = salaries.slice(salaries.length - cantidadTop10, salaries.length);
const top10Median = medianOfSalaries(top10Salaries);

console.log({
    generalMedian,
    top10Median
});