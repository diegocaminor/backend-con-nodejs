// Duplex a diferencia de readable y writable streams, implementa ambas interfaces, es decir no necesito
// usar un readable y writable streams por aparte sino que con duplex puedo solucionar ambas necesidades
// Duplex y Transform, ambos sirven para simplificar nuestro código:
// Duplex: implementa los métodos write y read a la vez.
// Transform: es similar a Duplex pero con una sintaxis más corta.
const { Duplex } = require("stream");

const duplexStream = new Duplex({
    write(chunk, encoding, callback) {
        // chunk viene como tipo buffer y con toString lo podemos leer
        console.log(chunk.toString());
        callback();
    },
    read(size) {
        if(this.currentCharCode > 90) {
            this.push(null);
            return;
        }
        this.push(String.fromCharCode(this.currentCharCode++));
    }
});

duplexStream.currentCharCode = 65;
process.stdin.pipe(duplexStream).pipe(process.stdout);