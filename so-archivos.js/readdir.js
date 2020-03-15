const fs = require("fs");

// __dirname tiene la info del directorio actual
// readdir lee todos los archivos que están en directorio
const files = fs.readdir(__dirname, (err, files) => {
    if(err) {
        return console.log(err);
    }
    console.log(files);
});