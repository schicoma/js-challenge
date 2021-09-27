// Patrón Error First Callback

function anAsynchronousFunction(callback) {
    setTimeout(() => {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (e) {
            callback(e, null);
        }
    }, 1000);
}

anAsynchronousFunction(function (error, data) {
    if (error) {
        console.log('Tenemos un error');
        console.error(error);
        return false;

        // throw error; NO VA A FUNCIONAR en un bloque asíncrono
    }

    console.log('Todo está bien. Mi dato es: ' + data);
});