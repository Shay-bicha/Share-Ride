const fs = require("fs"),
fileName = 'Rides.txt';

exports.getRides = (req, res) => {
  let getInfo = req.body;
  console.log(getInfo,'post Request');
  
  fs.readFile(fileName,'utf8',(err, data) => {
    if (err) throw err;
    let fileData = JSON.parse(data);
    console.log(fileData);
     let result = [];

    fileData.forEach(data => {
     if(data.location == getInfo.location && data.destination == getInfo.destination && data.time == getInfo.time){
        result.push({location:data.location,
                     destination: data.destination,
                     time:data.time ,
                     name: 'Dan'});
     }
    });
           console.log(result,'this is result');
           return res.status(201).send(result);
  });

};

// get data from client

// check Validation

//read data from rides-txt

//send response to client
