
const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'restaurant-menu';
let db;

app.listen(3000, function() {
  console.log('listened to 3000')
});

app.get('/', function(req, res) {
  res.send('Hello world')
});

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) return console.log(err)
  // storing database
  db = client.db(dbName)
  const menuCollection = db.collection('menu')
  console.log(`Connected to MongoDB: ${url}`)
});

app.post('/new-item', (req, res) => {
  db.collection('menu').insertOne(req.body)
  //menuCollection.insertOne(req.body)
    .then(result => {
      res.redirect('/')
    })
});
