// Transform es muy similar a Duplex, solo que la sintaxis es mucho más reducida
const { Transform } = require("stream");

const transformStream = new Transform({
    // se pueden ejecutar todas las propiedades del write y todas del read
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

process.stdin.pipe(transformStream).pipe(process.stdout);