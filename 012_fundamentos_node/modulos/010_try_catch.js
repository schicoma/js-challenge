function functionWithError() {
    return 3 + z;
}

// functionWithError(); // Uncaught ReferenceError: z is not defined

try {
    functionWithError();
    console.log('Este log no se pintará');
} catch (e) {
    console.log(`Atrapando un error: ${e.message}`);
}

// Manejando errores asíncronos

function functionWithErrorAsync() {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (e) {
            console.log(`Atrapando un error (async): ${e.message}`);
        }
    }, 1000);
}

try {
    functionWithErrorAsync(); 
    console.log('Este log SI se pinta ya que la funcion es asíncrona. No se detectaran errores fuera del hilo principal');
} catch (e) {
    console.log(`Atrapando un error: ${e.message}`);
}