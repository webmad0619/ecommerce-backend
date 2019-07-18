const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaName = new Schema({
  name: String,
  title: String,
  price: Number,
  id: String
});

const Model = mongoose.model('Movie', schemaName);
module.exports = Model;