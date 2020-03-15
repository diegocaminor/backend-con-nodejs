const os = require("os");

// este método imprimer el core de nuestra pc, para saber que tanta potencia tiene nuestra pc
// console.log("CPU ingo", os.cpus());
// console.log("IP address", os.networkInterfaces().wifi0.map(i => i.address));
// console.log("Free memory: ", os.freemem()); // memoria en bytes
// console.log("Free memory ", (((os.freemem() / 1024) / 1024) / 1024).toFixed(2), "gb"); // memoria en gb
// console.log("OS Type: ", os.type());
// console.log("OS Version: ", os.release());
console.log("Usr info", os.userInfo());