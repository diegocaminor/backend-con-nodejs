// Transform es muy similar a Duplex, solo que la sintaxis es mucho más reducida
const { Transform } = require("stream");

const transformStream = new Transform({
    // se pueden ejecutar todas las propiedades del write y todas del read
    transform(chunk, encoding, callback) {
        let palabras = chunk.toString().split(" ");
        let palabrasConcatenadas = "";
        let camelCase = "";
        palabras.map((palabra, key) => {
            palabrasConcatenadas = palabra.charAt(0).toUpperCase() + palabra.slice(1)
            camelCase = camelCase.concat(palabrasConcatenadas);
        })
        this.push(camelCase);
        callback();
    }
});

process.stdin.pipe(transformStream).pipe(process.stdout);