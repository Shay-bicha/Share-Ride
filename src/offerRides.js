//* imports fs and file
const fs = require('fs');
const fileName = 'Rides.txt';
const rideScheme = require('./models/ridesModel');
exports.offerRides = (req, res) => {
    //* get data from user
    let body = req.body;
    //* console.log(body);

    let startingPoint = body.startingPoint;
    let destination = body.destination;
    let seats = body.Seats;
    let time = body.time;

    let newRide = { startingPoint: startingPoint, destination: destination, seats: seats, time: time }
    console.log(newRide);
    
    //! insert to the database
    rideScheme.create(newRide, (err, success) => {
        if (err) console.log(err);
        else {
            res.status(201).json({
                data: "successfully submitted"
            });
        }
    });
}

exports.getRides = (req, res) => {
    let body = req.body;
    let ride = rideScheme.find({
        startingPoint: body.startingPoint,
        destination: body.destination,
        time: body.time
    });

    ride.select('startingPoint destination time');
    ride.exec((err, txt) => {
        if (err) console.log(err);
        else {
            console.log(txt);
            
            res.status(201).JSON({
                data: txt
            })
        }
    });
}