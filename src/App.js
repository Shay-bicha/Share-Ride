const express = require('express');
const path = require('path');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const app = express();
const test = require('./test');
const getRides = require('./getRides');
const offerRides = require('./offerRides');
// const port = 8080;
const signIN = require('./signin');
const port = 8080;
const publicdir = path.join(__dirname, '..', 'public');
app.use(express.static(publicdir));
app.use(express.json());

app.post('/signin', (req, res)=>{
    signin.signinHandler(req, res);
});

app.post('/offerRides', (req, res)=>{
    offerRides.offerRides(req, res);
    
});

app.post('/getRides', (req, res)=>{
    getRides.getRides(req, res);
});
app.get('/' , (req , res)=>{
    res.send('hello world');
});

app.listen(process.env.PORT || 8080,()=>{
    console.log("listening on port");
});
