const db = require('../models');
const Food = db.menu;


// Create and Save a new item
exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const item = new Food({
    title: req.body.title,
    price: req.body.price,
    category: req.body.category,
    description: req.body.description,
    available: req.body.available ? req.body.available : true
  });

  item.save(function (error, document) {
    if (error) console.error(error);
    console.log(document);
  });
  // item.save( data => {
  //   console.log(data);
  //   res.send(data);
  // })
  // .catch( err => {
  //   res.status(500).send({message: "Error while creating object"});
  // });
};

// Retrieve all items from the database.
exports.findAll = (req, res) => {

  Food.find()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({message: "Error while retrieving object"});
  });

};

// TODO

// Find a single item with an id
exports.findOne = (req, res) => {

};

// Update an item by the id in the request
exports.update = (req, res) => {

};

// Delete an item with the specified id in the request
exports.delete = (req, res) => {

};
