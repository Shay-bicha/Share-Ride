const User = require('./models/userModel');
exports.loginHandler = (req, res) => {
    let body = req.body;
    try {
        let user = User.findOne({email: bosy.email})
        user.select('email name password');
        user.exec()
    } catch (error) {
        
    }
}

