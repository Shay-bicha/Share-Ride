const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

let userSchema = new Scheme({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true
    },
    password: String,
    confirmPassword: String
});


module.exports = userSchema;