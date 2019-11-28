const fs = require('fs');
const User = require('./models/userModel');
exports.signinHandler = (req, res)=>{
    let body = req.body;
    if (body) {
        
    };
    
    let newUser = {
        firstName: req.firstName,
        lastName: req.lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    }
}

