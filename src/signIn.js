const fs = require('fs');
const User = require('./models/userModel');
exports.signinHandler = (req, res) => {
    let body = req.body;
    if (body.password=== body.confirmPassword) {
        // console.log(body);
        
        let newUser = {
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            password: body.password,
            confirmPassword: body.confirmPassword,
            gender: body.gender,
            age: body.age
        }
        console.log(newUser);
        
        User.create(newUser, (err, success)=>{
            if(err) console.log(err);
            else{
                console.log(success);
            }
        });
    };
}


exports.loginHandler = (req, res) => {
    let body = req.body;
    try {
        let user = User.findOne({email: bosy.email})
        user.select('email name password');
        user.exec((err, txt)=>{
            if(err) console.log(err);
            
        });
        res.status(200).send("loged suseesfully");
    } catch (error) {
        
    }
}


   





