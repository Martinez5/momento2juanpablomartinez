const {model, Schema}= require ('mongoose');

const BookingSchema = Schema({
    nomb:{
        type:String,
    },
    apellido:{
        type:String,
    },
    tel:{
        type:String,
    },
    personas:{
        type:String,
    },
    fecInicio:{
        type:String,
    },
    fecFinal:{
        type:String,
    },
    paquete:{
        type:String,
    }

});

module.exports=model('Booking', BookingSchema);