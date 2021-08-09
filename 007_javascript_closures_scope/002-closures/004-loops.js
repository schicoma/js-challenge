const anotherFunction = () => {
    for (var i = 0; i < 10; i++) {

        /**
         * Aquí se están creando closures involuntarios 
         */
        setTimeout(() => {
            console.log(i); // 10, 10, 10, 10, 10, 10, 10, 10, 10, 10
        }, 1000);
    }
};

anotherFunction();