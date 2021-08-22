const helloFromModule = () => {
    return 'Hello from other module!';
};

// export default helloFromModule;

/**
 * using another sintaxis
 *
 */

module.exports = helloFromModule;


// -------------------------

/**
 * Generators
 * 
 * Función especial que retorna un conjunto de valores
 * en base a un algoritmo elegido
 * 
 * function*
 * 
 */

function* helloWorldWithGenerator() {
    if (true) {
        yield 'Hello, ';
    }

    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorldWithGenerator();
console.log(generatorHello.next().value); // 'Hello, '
console.log(generatorHello.next().value); // 'World'
console.log(generatorHello.next().value); // undefined