const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');

const {
  logErrors,
  errorHandler
} = require('./utils/middleware/errorHandlers.js');

// body parser
app.use(express.json()); // este middleware permite a nuestras rutas interpretar los datos en formato json que le enviamos

moviesApi(app);

// los middleware son una pieza de software que está entre 2, se le conoce como software glue, es decir ayuda a conectar otras piezas de software
// los middleware de error siempre tienen que ir al final de nuestras rutas, recordemos que ellos también son rutas
app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`Listening http//localhost:${config.port}`);
});
