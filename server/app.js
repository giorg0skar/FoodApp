const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const www = process.env.WWW || './';
// app.use(express.static(www));
// console.log(`serving ${www}`);

var corsOptions = {
  origin: "http://localhost:4200"
}
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

// connect to database
const dburl = 'mongodb://localhost:27017/restaurant_db';

mongoose.connect(dburl, {useNewUrlParser: true, useUnifiedTopology: true})
  .then( () => {
    console.log(`Connected to database: ${dburl}`);
  }
);

// we create a simple model and store some items to db for testing
// const itemSchema = new Schema({
//   title: String,
//   price: Number,
//   category: String,
//   description: String,
//   available: Boolean
// });
// const Food = mongoose.model('food', itemSchema);
const Food = require('./app/models/food.model');

// ----TESTING EXAMPLE STARTS----------------

// const chicken = new Food({
//   title: 'chicken',
//   price: 5.5,
//   category: 'Main dishes',
//   description: 'Chicken in the oven',
//   available: true
// });
// chicken.save(function(err, document) {
//   if (err) console.error(err);
//   console.log(document);
// });

// const soup = new Food({
//   title: 'soup',
//   price: 6,
//   category: 'Main dishes',
//   description: 'Chicken in the oven',
//   available: true
// });
// soup.save(function(err, document) {
//   if (err) console.error(err);
//   console.log(document);
// });

// ----TESTING EXAMPLE ENDS---------------

const baseUrl = '/api/menu';

// get all items
app.get(baseUrl, function(req, res) {
  // console.log('root folder accessed');
  Food.find((err, data) => {
    res.send(data);
  })
});

// create new item
app.post(baseUrl, function(req, res) {
  const new_item = new Food({
    title: req.body.title,
    price: req.body.price,
    category: req.body.category,
    description: req.body.description,
    available: true
  });

  new_item.save(function(err, document) {
    if (err) console.error(err);
    console.log(document);
  });
});

// delete all items
app.delete(baseUrl, function(req, res) {
  Food.deleteMany({}, (err) => {
    if (err) console.error(err);
  });
  console.log('emptied the database');
});

// delete an item with a specific id
app.delete(`${baseUrl}/:id`, function(req, res) {
  // const id = req.params.id;
  // const deleted = Food.findByIdAndRemove(id, (err, res) => {
  //   if (err) console.error(err);
  // });
  const name = req.params.id;
  const deleted = Food.findOneAndDelete({ title: name }, function(err, res) {
    if (err) console.error(err);
  });
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
