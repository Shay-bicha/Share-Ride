const express = require('express');
const path = require('path');
const app = express();
const getRides = require('./getRideModule');
const offerRides = require('./offerRides');
const port = 8080;
const publicdir = path.join(__dirname, '..', 'public');
app.use(express.static(publicdir));
app.use(express.json());

app.post('/offerRides', (req, res)=>{
    offerRides.offerRides(req, res);
});

app.post('/getRides', (req, res)=>{
    getRides.getRides(req, res);
});

app.listen(port,()=>{
    console.log("listening on port" + port);
});