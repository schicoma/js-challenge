// Ejemplo 1

const doSomethingAsync = (condition) => {
    return new Promise((resolve, reject) => {
        (condition)
            ? setTimeout(() => resolve('Do something async'), 3000)
            : reject(new Error('Do something async failed'));
    });
};

const doSomething = async () => {
    console.log('Before doSomethingAsync');

    const something = await doSomethingAsync(true);
    console.log(something);

    console.log('After doSomethingAsync');
};

// console.log('Before');
// doSomething();
// console.log('After');

// Ejemplo 2

const anotherFunction = async () => {
    try {
        console.log('Antoher before doSomethingAsync');
        const something = await doSomethingAsync(false);
        console.log('Another after doSomethingAsync');
    } catch (error) {
        console.log(error);
    }
};

console.log('Another before');
anotherFunction();
console.log('Another after');