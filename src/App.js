const express = require('express');
const path = require('path');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const app = express();
const test = require('./test');
const getRides = require('./getRides');
const offerRides = require('./offerRides');
const signin = require('./signIn');
const port = 8080;
const publicdir = path.join(__dirname, '..', 'public');
app.use(express.static(publicdir));
app.use(express.json());

let dbUrl = "mongodb+srv://aschaley123:As123123@cluster0-c0kmd.mongodb.net/shareRide?retryWrites=true&w=majority";

mongoose.connect(dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (connection) => {
    console.log("connected to db");

})

app.post('/signin', (req, res) => {
    signin.signinHandler(req, res);
  
mongoose.connect(dbUrl,{ useUnifiedTopology: true }, (connection)=>{
    console.log("connected to db");
    
})

});

app.post('/login', (req, res) => {
    signin.loginHandler(req, res);
});
// app.get('/getRide',(req,res)=>{
//     console.log('get res get');
//     res.sendFile();
// })



app.post('/offerRides', (req, res) => {
    offerRides.offerRides(req, res);

});

app.post('/getRides', (req, res) => {
    getRides.getRides(req, res);
});
app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(process.env.PORT || 8080, () => {
    console.log("listening on port");
});
