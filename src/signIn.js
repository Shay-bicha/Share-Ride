const fs = require('fs');
const User = require('./models/userModel');
exports.signinHandler = (req, res) => {
    let body = req.body;

    if (body) {
        let newUser = {
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            password: body.password,
            confirmPassword: body.confirmPassword,
            gender: body.gender,
            age: body.age
        }
        User.create(newUser, (err, success)=>{
            if(err) console.log(err);
            else{
                console.log(success);
                
            }
        });
    };




}

