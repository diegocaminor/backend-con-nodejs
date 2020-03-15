const { Readable } = require("stream");
const readableStream = new Readable();

// truco usando template literals
readableStream.push(`${0/0} `.repeat(10).concat("Batman, Batman!"));
// para decirle al readableStream que dejo de recibir datos llamamos push pero esta vez con null, así el sabe que dejó de recibir datos
readableStream.push(null);

// al igual que con los writableStreams es importante
// hacerle un pipe a un readableStream en este caso
// uno depende de otro
// process.stdout llama a console.log() por debajo;
readableStream.pipe(process.stdout);
