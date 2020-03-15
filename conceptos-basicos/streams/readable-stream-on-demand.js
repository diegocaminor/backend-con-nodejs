// este programa escribirá el abedecedario letra por letra
const { Readable } = require("stream");
const readableStream = new Readable({
    read(size) {
        setTimeout(() => {
            // this es readableStream
            if(this.currentCharCode > 90) { // 90 es letra Z
                this.push(null);
                return;
            }
            this.push(String.fromCharCode(this.currentCharCode++));
        }, 100);
    }
});

// definimos cual sería el charCode con el que va empezar
readableStream.currentCharCode = 65; // es letra A
readableStream.pipe(process.stdout);
