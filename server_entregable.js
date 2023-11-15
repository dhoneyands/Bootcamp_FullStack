const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoAPIError.Client;
const url = 'mongodb://mongodb-container:27017';

//constants
const hostname = '0.0.0.0';
const port = 135;

//requests routes
app.get('/',function(req,res){
    res.send('GET request to the Homepage');
});
app.post('/',function(req,res){
    res.send('POST request to the Homepage');
});
app.get('/secret',function(req,res,next){
    res.send('Print hello world');
    console.log('This is a log message as a test');
});

app.listen(port, hostname);
console.log(`Running on http://${hostname}:${port}`);
