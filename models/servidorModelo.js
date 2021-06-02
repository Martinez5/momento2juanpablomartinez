const express = require('express');
const cors = require('cors');

const rutas = require('../routes/RoutesBookings');

const { conectarBD } = require('../database/conexion.js');

class servidorModelo{

    constructor(){
        this.app = express();
        this.despertarBaseDatos();
        this.crearMiddlewares();
        this.llamarRutasAPI();

    }

    despertarServidor(){
        this.app.listen(process.env.PORT);
    }

    llamarRutasAPI(){
        this.app.use('/', rutas);

    }

    despertarBaseDatos()
    {
        conectarBD();
    }


    crearMiddlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
    }
}

module.exports=servidorModelo;