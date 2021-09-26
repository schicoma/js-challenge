console.log('Hola mundo');

let i = 0;

setInterval(() => {
    console.log(i);
    i++;

    if (i === 5) {

        /**
         * Importante: 
         * 
         * Cuando ocurre un error dentro de alguno de los hilos y no se controla 
         * apropiadamente (catch); Node detiene todos los hilos ejecución. 
         * Esto puede ser muy peligroso, debido a que es dificil determinar fue el 
         * origen del problema y en que punto de ejecución se encontraba cada hilo 
         * cuando fue detenido.
         * 
         */

        var a  = 3 + z; // error
    }
}, 1000);

console.log('Segunda instrucción');