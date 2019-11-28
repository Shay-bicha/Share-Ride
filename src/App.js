const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
const publicdir = path.join(__dirname, '..', 'public');
app.use(express.static(publicdir));




app.listen(port,()=>{
    console.log("listening on port" + port);
});