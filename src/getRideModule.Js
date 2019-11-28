// const express = require('express'),
const fs = require('fs');



module.exports.getRide = getRide(req,res){
 let data = req.body;
console.log(data);

res.status(200);

}

// get data from client

// check Validation

//read data from rides-txt 

//send response to client