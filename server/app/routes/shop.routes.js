
module.exports = app => {
  const menu = require('../controllers/food.controller.js');

  var router = require('express').Router();

  // create a new food
  router.post('/', menu.create);

  // get the entire menu (all items) from the database
  router.get('/', menu.findAll);

  router.put('/:id', menu.update);

  app.use('/api/menu', router);
};
