const helloWorld = () => {
    const hello = 'Hello world';
    console.log(hello);
};

helloWorld();

/**
 * ReferenceError:  
 * 'hello' is not defined
 */

// console.log(hello);

// ------------------------------

var scope = 'I\'m global';

const functionScope = () => {
    var scope = 'I am just a local';
    const func = () => {

        /**
         * Ámbito léxico 
         * 
         * 'scope' representa el valor local del método
         * 
         */

        return scope;
    }

    console.log(func());
};

functionScope(); // I am just a local

console.log(scope); // I'm global