/**
 * Crea una función (usando streams) que reciba una cadena de texto
 * y la convierta en camel case usando streams
 *
 */

const { Transform } = require('stream');

const transformStream = new Transform({
    transform(chunk, enconding, callback) {
        const camelCase = chunk
            .toString()
            .split(' ')
            .map((word) => toCamelCase(word))
            .join('');

        this.push(camelCase);

        callback();
    },
});

function toCamelCase(word) {
    return word.substr(0, 1).toUpperCase().concat(word.substring(1));
}

process.stdin.pipe(transformStream).pipe(process.stdout);
