const { Readable } = require('stream');

const readableStream = new Readable({
    read(size) {
        setTimeout(() => {
            // si el charcode actual es 'Z'
            if (this.currentCharCode > 90) {
                this.push(null);
                return;
            }

            this.push(String.fromCharCode(this.currentCharCode++));
        }, 500);
    }
});

readableStream.currentCharCode = 65;
readableStream.pipe(process.stdout);