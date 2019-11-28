//* imports fs and file
const fs = require('fs');
const fileName = 'Rides.txt';
const rideScheme = require('./models/ridesModel');
exports.offerRides = (req, res) => {
    //* get data from user
    let body = req.body;

    //* console.log(body);
    let location = body.location;
    let destination = body.destination;
    let seats = body.Seats;
    let time = body.time;
    let newRide = { location: location, destination: destination, seats: seats, time: time };

    //! write to the rides file
    fs.readFile(fileName, 'utf-8', (err, file) => {
        if (err) throw err;
        else {
            try {
                let result = JSON.parse(file)
                result.push(newRide);
                console.log(result);
                fs.writeFileSync(fileName, JSON.stringify(result));
            }
            catch (err) {
                return []
            }
        }
    });

    //! insert to the database
    rideScheme.create(body, (err, success) => {
        if (err) console.log(err);
        else {
            console.log(success);
        }
    });
}