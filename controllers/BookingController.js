const { request, response } = require('express');

const BookingModelo = require('../models/BookingModelo');

async function searchBookings(peticion = request, respuesta = response)
{
    let dataBooking = await BookingModelo.find();
    respuesta.json({
        mensaje: dataBooking
    });
}

async function addBooking(peticion = request, respuesta = response)
{
    let datosPeticion = peticion.body;
    let booking = new  BookingModelo(datosPeticion);
    
    await booking.save();

    respuesta.json({
        mensaje: 'Booking guardado',
        datos: booking
    });
}


async function editBooking(peticion = request, respuesta = response)
{
    
    let id = peticion.params.id;
    let datosPeticion = peticion.body;
    
    await BookingModelo.findByIdAndUpdate(id, datosPeticion);

    respuesta.json({
        mensaje: 'Booking Actualizado',
        id: id,
        datosPeticion: datosPeticion



    });
}


async function deleteBooking(peticion = request, respuesta = response)
{
    
    let id = peticion.params.id;
    
    await BookingModelo.findByIdAndDelete(id);

    respuesta.json({
        mensaje: 'Booking Eliminado',
    });
}

async function searchBooking(peticion = request, respuesta = response)
{
    let id = peticion.params.id;
    let dataBooking = await BookingModelo.findById(id);

    respuesta.json({
        mensaje: dataBooking
    });
}




module.exports={searchBookings, addBooking, editBooking, deleteBooking, searchBooking}