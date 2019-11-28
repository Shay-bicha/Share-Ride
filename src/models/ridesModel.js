const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let rideSchema = mongoose.Schema({
    startingPoint: {
        type: String,
        required: true
    },
    destination:{
        type: String,
        required: true
    },
    driver:{

    }
})

let newride = mongoose.model('rides', rideSchema);
module.exports = newride;