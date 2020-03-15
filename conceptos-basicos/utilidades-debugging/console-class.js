// Lo que vamos a hacer es que en vez de usar una consola tradicional en donde imprime por el stdout y stderror,
// vamos a usar el módulo fs para que cada vez que escriba o imprima en el stdout cree un archivo de LOG
const fs = require("fs");

const out = fs.createWriteStream("./out.log");
const err = fs.createWriteStream("./err.log");

const consoleFile = new console.Console(out, err);

// setInterval es parecido al setTimeOut solo que en vez de ejecutar la funcionalidad una sola vez,
// la ejecuta en espacios de intervalo, este caso 2000 ms que son 2s
setInterval(() => {
    consoleFile.log(new Date());
    consoleFile.error(new Error("Ooops!"));
}, 2000);