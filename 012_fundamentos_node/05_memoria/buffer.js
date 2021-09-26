// buffer: datos binarios en secuencia de bytes

// let buffer = Buffer.alloc(4); // espacios en memoria
// let buffer = Buffer.from([1,2,3,4]); // guardar valores en memoria
let buffer = Buffer.from("Hola");

console.log(buffer);
console.log(buffer.toString());

// -

let anotherBuffer = Buffer.alloc(26);
console.log(anotherBuffer);

for (let i = 0; i < 26; i++) {
    anotherBuffer[i] = i + 97;
}

console.log(anotherBuffer);
console.log(anotherBuffer.toString());
