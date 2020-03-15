const fs = require("fs");


    // DE MANERA ASÍNCRONA NO NECESITAMOS USAR UN TRY CATCH PORQUE EL ERROR SE MANEJA EN EL CALLBACK
    // el método argv o argumentos en vector puede leer lo que nosotros le pasamos por terminal
    // pos 0 -> palabra node
    // pos 1 -> nombre del archivo que estoy ejecutando
    // pos 2 -> nombre del archivo de text que quiero leer para este ejemplo
    // node sync-file.js naranja.txt
    // '/usr/bin/node',
    // '/mnt/d/proyectos/platzi/escuela-de-js/backend-nodejs/so-archivos.js/sync-files.js',
    // 'naranja.txt'
    console.log(process.argv);
    const file = process.argv[2]; // 'naranja.txt'
    if(!file) {
        throw new Error("Debes indicar el archivo que quieres leer");
    }
    const content = fs.readFile(file, function(err, content) {
        if(err) {
            return console.log(err);
        }
        const lines = content.toString().split("\n").length;
        console.log(lines);
    });
