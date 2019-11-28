// const express = require('express'),
const fs = require('fs'),
fileName = 'Rides.txt';

   console.log(fileName);

 fs.readFile(fileName, (err, data) => {
        if (err) throw err;
        console.log(data,'this is data');
      });

exports.getRides = function getRides(req,res){
 let body = req.body;
    console.log(body);
   
   
 //console.log('this is file data');


return res.status(201).send(body);

}

// get data from client

// check Validation

//read data from rides-txt 

//send response to client