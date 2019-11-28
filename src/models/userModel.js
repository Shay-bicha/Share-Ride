const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    firstName:  {
        type: String,
        required: true
    },
    lastName:  {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:  {
        type: String,
        required: true
    },
    confirmPassword:  {
        type: String,
        required: true
    },
    gender: String,
    age: Number
});

let newUser = mongoose.model('users', userSchema)
module.exports = newUser;