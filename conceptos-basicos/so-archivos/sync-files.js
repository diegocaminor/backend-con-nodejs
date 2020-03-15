const fs = require("fs");

try {
    // DE MANERA SÍNCRONA SI PODEMOS UTILIZAR TRY CATCH YA QUE NO TENEMOS UN CALLBACK
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
    const content = fs.readFileSync(file).toString();
    const lines = content.split("\n").length;
    console.log(lines);
} catch(err) {
    console.log(err); 
}