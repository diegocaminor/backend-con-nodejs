// LOS STREAMS BÁSICAMENTE SIRVEN PARA MANEJAR GRANDES CANTIDADES DE DATOS
// este archivo leería utilizando streams, es decir por pedazos y de esta manera no acapararía toda la memoria del servidor
const fs = require("fs");

const server = require("http").createServer();

server.on("request", (req, res) => {
  const src = fs.createReadStream('./big');
  src.pipe(res);
});

server.listen(3000);
