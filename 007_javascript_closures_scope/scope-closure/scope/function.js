const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
};

fruits();

const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;

    /**
     * SyntaxError: Identifier 'y' has already been declared
     * 
     * Utilizar let y const en lugar de var para evitar reasginar un nuevo valor
     * a nuestras variables trabajadas.
     */
    let y = 2;

    console.log(x);
    console.log(y);
};

anotherFunction();