const express = require('express');
const path = require('path');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const app = express();
const getRides = require('./getRideModule');
const offerRides = require('./offerRides');
const signiN = require('./signin');
const port = 8080;

//! DB
const uri = "mongodb+srv://aschaley123:As123123@cluster0-c0kmd.mongodb.net/shareRide?retryWrites=true&w=majority";
mongoose.connect(uri,{useUnifiedTopology: true, useNewUrlParser: true},(err, db)=>{
    if(err) throw err
    else{
        console.log("connected to Db");
    }
});

const publicdir = path.join(__dirname, '..', 'public');
app.use(express.static(publicdir));
app.use(express.json());

app.post('/signin', (req, res)=>{
    signiN.signinHandler(req, res);
});
// app.get('/getRide',(req,res)=>{
//     console.log('get res get');
//     res.sendFile();
// })

app.post('/offerRides', (req, res)=>{
    offerRides.offerRides(req, res);
});

app.post('/getRides', (req, res)=>{
    getRides.getRides(req, res);
});

app.listen(process.env.PORT || 8080,()=>{
    console.log("listening on port");
});
