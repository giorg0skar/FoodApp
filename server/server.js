const express = require('express');
const bodyParser= require('body-parser');
const cors = require('cors');
const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - applicationx-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB
// const url = 'mongodb://127.0.0.1:27017';
// const dbName = 'restaurant_menu';
const db = require('./app/models');

db.mongoose.connect(db.url, {useNewUrlParser: true, useUnifiedTopology: true})
  .then( () => {
    console.log('Connected to the database');
  })
  .catch( err => {
    console.log('Cannot connect to the database', err);
    process.exit();
  });


require("./app/routes/shop.routes")(app);

// set port, listen to requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  console.log(`listening to ${PORT}`);
});

// app.post('/', (req, res) => {
//   item = new Food()
// }
// );

// MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
//   if (err) return console.log(err)
//   // storing database
//   db = client.db(dbName)
//   const menuCollection = db.collection('menu')
//   console.log(`Connected to MongoDB: ${url}`)
// });

// app.post('/new-item', (req, res) => {
//   db.collection('menu').insertOne(req.body)
//   //menuCollection.insertOne(req.body)
//     .then(result => {
//       res.redirect('/')
//     })
// });
