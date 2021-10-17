// Manejo de callbacks
const asyncCallback = function (cb) {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            cb(null, "Hello world");
        } else {
            cb(new Error("Hello error"));
        }
    }, 2000);
};

asyncCallback((error, message) => {
    if (error) {
        console.error(error);
    } else {
        console.log("Nuestro mensaje:", message);
    }
});
