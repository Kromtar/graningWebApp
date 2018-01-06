const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema({
  name: String,
  companytoclientdate: Date,
  clienttocompany: Date
});

module.exports = reviewSchema;
