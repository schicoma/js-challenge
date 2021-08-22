// ES8 en 2017

/**
 * Object.entries();
 * 
 */

const data = {
    'frontend': 'Sebastian',
    'backend': 'Julian',
    'design': 'Carlos'
};

const entries = Object.entries(data);

console.log(entries);
console.log(entries.length);

/**
 * Object.values();
 * 
 */

const values = Object.values(data);

console.log(values);
console.log(values.length);

/**
 * Object.keys();
 * 
 */

const keys = Object.keys(data);

console.log(keys);
console.log(keys.length);


// ---------------------------------------


const string = 'hello';

console.log(string.padStart(7, 'hi')) // 'hihello'
console.log(string.padStart(20, 'hi')) // 'hihihihihihihihhello'
console.log(string.padEnd(15, '---- world')) // 'hello---- world'

// -----------------------------------

/**
 *  Async Await
 * 
 */

const helloWorld = (condition = true) => {
    console.log('Calling hello ... ');
    return new Promise((resolve, reject) => {
        (condition)
            ? setTimeout(() => resolve('Hello World'), 5000)
            : reject(new Error('Test error'));
    });
}

const asyncHelloWorld = async () => {
    const hello = await helloWorld();
    console.log(`'${hello}' with an async way`);
};

asyncHelloWorld();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld(false);
        console.log(`Another'${hello}' with an async way`);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();