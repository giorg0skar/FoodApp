const mongoose = require('mongoose');

module.exports = mongoose => {

  var schema = mongoose.Schema(
    {
      title: String,
      price: Number,
      category: String,
      description: String,
      available: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Food = mongoose.model("food", schema);

  return Food;
};
