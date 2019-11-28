//* imports fs and file
const fs = require('fs');
const fileName = './Rides.txt';

exports.offerRides = (req, res) => {
    //* get data from user
    let body = req.body;
    let location = body.location;
    let destination = body.destination;
    let seats = body.destination;
    let time = body.time;
    
    fs.read(fileName, (err, file)=>{
        
    });


}