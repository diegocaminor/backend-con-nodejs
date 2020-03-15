const { Writable } = require("stream");
const writableStream = new Writable({
    write(chunk, encoding, callback) {
        console.log("test");
        console.log(chunk.toString());
        callback();
    }
});

// lo importante de los writableStream es que tienen que estar
// añadidos a un readableStream

// stdin es funcionalidad nativa que se encarga de leer los datos
process.stdin.pipe(writableStream);
