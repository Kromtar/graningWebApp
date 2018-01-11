const mongoose = require('mongoose');

const { Schema } = mongoose;

const stageSchema = require('./Stage');

const projectSchema = new Schema({
  name: String,
  internalcode: { type: 'String', unique: true },
  proyectnumber: { type: 'String', unique: true },
  contractnumber: String,
  purchaseordernumber: String,
  openprojectdate: Date,
  closeprojectdate: Date,
  term: Number,
  _stage: [stageSchema],
  state: String,
  finished: { type: Boolean, default: false }
});


mongoose.model('projects', projectSchema);
