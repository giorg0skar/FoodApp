const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// the Schema for an item of the restaurant's menu
const itemSchema = new Schema({
  title: String,
  price: Number,
  category: String,
  description: String,
  available: Boolean
});

module.exports = mongoose.model('food', itemSchema);


// module.exports = mongoose => {

//   var schema = mongoose.Schema(
//     {
//       title: String,
//       price: Number,
//       category: String,
//       description: String,
//       available: Boolean
//     },
//     { timestamps: true }
//   );

//   const Food = mongoose.model('food', schema);

//   return Food;
// };
