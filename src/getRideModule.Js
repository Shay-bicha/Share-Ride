// const express = require('express'),
const fs = require('fs');



module.exports.getRides = function getRides(req,res){
 let data = req.body;
console.log(data);

return res.status(201).send(data);

}

// get data from client

// check Validation

//read data from rides-txt 

//send response to client