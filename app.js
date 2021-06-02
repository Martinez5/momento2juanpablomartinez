const servidorModelo = require('./models/servidorModelo');


require('dotenv').config()

let servidor = new servidorModelo();

servidor.despertarServidor();