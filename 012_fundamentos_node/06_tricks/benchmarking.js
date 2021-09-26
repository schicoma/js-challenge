console.time('All');

let sum = 0;

console.time('Loop');

for (let i = 0; i < 100000000; i++) {
    sum += 1;
}

console.timeEnd('Loop');

let sum2 = 0;

console.time('Loop 2');

for (let j = 0; j < 100000000; j++) {
    sum2 += 1;
}

console.timeEnd('Loop 2');

console.time('Asynchronous');
console.log('Empieza el proceso asíncrono');

asyncFunction().then(() => {
    console.timeEnd('Asynchronous');
});

console.timeEnd('All');

function asyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Terminó el proceso asíncrono");
            resolve();
        }, 5000);
    });
}