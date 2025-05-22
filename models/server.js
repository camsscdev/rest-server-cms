const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.usuariosPath = '/api/usuarios';
    this.rolesPath = '/api/roles';

    // middlewares
    this.middlewares();
    // rutas de app
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //lectura y parseo del body

    this.app.use(express.json());

    // Directorio publico
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.usuariosPath, require('../routes/user'));
    this.app.use(this.rolesPath, require('../routes/roles'));
  }

  listen() {
    this.app.listen(this.port);
  }
}

module.exports = Server;
