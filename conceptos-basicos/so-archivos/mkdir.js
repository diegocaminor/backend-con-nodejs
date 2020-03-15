const fs = require("fs");

// si el parámetro 'recursive' se setea en true, entonces
// si el directorio que se trata de buscar no existe, lo creará 
fs.mkdir("platzi/escuela-js/node", { recursive: true }, (err) => {
    if(err) {
        return console.log(err);
    }
});
