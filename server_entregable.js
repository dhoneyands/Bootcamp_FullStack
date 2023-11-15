const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoAPIError.Client;
const url = 'mongodb://localhost:27017';
const dbName='local';
const collectionName='listingsAndReviews';

//constants
const hostname = '0.0.0.0';
const port = 3702;

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

// Query para obtener todos los registros de la base de datos
app.get('/api/get/all', async function(req,res){
    try{
        const dbo = client.db(dbName);
        const query = {};
        const result = await dbo.collection(collectionName).find(query).toArray();
        if (result.length > 0){
            res.status(200).send(result);
            console.log("200 OK");
        } else{
            res.status(200).send("Collection is empty");
        }
        client.close();
    } catch (err){
        console.error(err);
        res.status(500).send("An error occurred");
    }
});

app.listen(port, hostname);
console.log(`Running on http://${hostname}:${port}`);
