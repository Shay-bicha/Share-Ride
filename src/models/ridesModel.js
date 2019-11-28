const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./userModel');
let rideSchema = mongoose.Schema({
    startingPoint: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    // driver:User.firstName
});
  

let newride = mongoose.model('rides', rideSchema);
module.exports = newride;