const mongoose = require('mongoose');

const { Schema } = mongoose;

const galerySchema = new Schema({
  internalcode: { type: 'String', unique: true },
  name: String,
  year: String,
  company: String,
  description: String,
  work: String,
  numberOfImg: Number,
});


mongoose.model('galerys', galerySchema);
