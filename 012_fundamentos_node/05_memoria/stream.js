const fs = require('fs');

let data = '';

let path = `${__dirname}/input.txt`;
let readableStream = fs.createReadStream(path);

readableStream.setEncoding('UTF-8');
readableStream.on('data', (chunk) => {
    // console.log(chunk);
    // console.log(chunk.toString());
    data += chunk;
});

readableStream.on('end', () => {
    console.log('Acabó de procesar: ', data);
});

// --

// process.stdout.write('hola');
// process.stdout.write('que');
// process.stdout.write('tal');
// process.stdout.write(':D');

const stream = require('stream');
const util = require('util');

const Transform = stream.Transform;

function Mayus() {
    console.log(this);
    Transform.call(this);
};

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus)
    cb();
};

let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);
