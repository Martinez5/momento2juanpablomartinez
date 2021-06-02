const mongoose = require('mongoose');

async function conectarBD() {
    try {
        await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        console.log("Conectado a Base de datos");
    }
    catch (error) {
        console.log("Error: " + error);
    }
}
module.exports={conectarBD};