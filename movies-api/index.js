const express = require('express');
const app = express();
const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');

app.use(express.json()); // este middleware permite a nuestras rutas interpretar los datos en formato json que le enviamos

moviesApi(app);

app.listen(config.port, function() {
  console.log(`Listening http//localhost:${config.port}`);
});
