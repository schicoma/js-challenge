// Uso de promesas
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            resolve("Hello world");
        } else {
            reject(new Error("Hello error"));
        }
    }, 2000);
});

promise
    .then((msg) => msg.toUpperCase()) // return msg.toUpperCase();
    .then((msg) => console.log("mensaje", msg))
    .catch((err) => console.error(err));
