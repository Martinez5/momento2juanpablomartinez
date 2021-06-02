const {Router} = require('express');
const {check}=require('express-validator')

const {searchBookings} = require('../controllers/BookingController');
const {addBooking} = require('../controllers/BookingController');
const {editBooking} = require('../controllers/BookingController');
const {deleteBooking} = require('../controllers/BookingController');
const {searchBooking} = require('../controllers/BookingController');

const {validarPeticion} = require('../validations/Validaciones')

let Validaciones = Array(
    check('nomb', 'Este campo es obligatorio').not().isEmpty(),
    check('apellido', 'Este campo es obligatorio').not().isEmpty(),
    check('tel', 'Este campo es obligatorio').not().isEmpty(),
    check('personas', 'Este campo es obligatorio').not().isEmpty(),
    check('fecInicio', 'Este campo es obligatorio').not().isEmpty(),
    check('fecFinal', 'Este campo es obligatorio').not().isEmpty(),
    check('paquete', 'Este campo es obligatorio').not().isEmpty(),

    validarPeticion
);

const rutas = Router();

rutas.get('/Bookings', searchBookings);
rutas.post('/addBookings', Validaciones ,  addBooking);
rutas.put('/editBooking/:id', editBooking);
rutas.delete('/deleteBooking/:id', deleteBooking);
rutas.get('/searchBooking/:id', searchBooking);


module.exports=rutas;
