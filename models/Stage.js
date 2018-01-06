const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = require('./Review');

const stageSchema = new Schema({
  name: String,
  _review: [reviewSchema]
});

module.exports = stageSchema;
