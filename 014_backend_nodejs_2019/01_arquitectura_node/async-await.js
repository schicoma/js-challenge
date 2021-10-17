// Uso de promesas
const promise = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve("Hello world");
            } else {
                reject(new Error("Hello error"));
            }
        }, 2000);
    });

async function asyncAwait() {
    try {
        const msg = await promise();
        console.log("Nuestro mensaje", msg);
    } catch (err) {
        console.error(err);
    }
}

asyncAwait();
