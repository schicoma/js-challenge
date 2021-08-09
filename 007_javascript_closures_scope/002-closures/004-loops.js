const myFunction = () => {
    for (var i = 0; i < 10; i++) {

        /**
         * Aquí se están creando closures involuntarios 
         */
        setTimeout(() => {
            console.log(i); // 10, 10, 10, 10, 10, 10, 10, 10, 10, 10
        }, 1000);
    }
};

myFunction();

const anotherFunction = () => {
    /**
     * let -> scope de tipo bloque dentro del loop
     * 
     */ 
    for (let i = 0; i < 10; i++) {

        /**
         * Aquí se están creando closures involuntarios 
         */
        setTimeout(() => {
            console.log(i); // 10, 10, 10, 10, 10, 10, 10, 10, 10, 10
        }, 1000);
    }
};

anotherFunction();