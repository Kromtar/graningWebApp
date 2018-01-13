const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new Schema({
  name: String,
  internalcode: { type: 'String', unique: true },
  proyectnumber: String,
  contractnumber: String,
  purchaseordernumber: String,
  openprojectdate: Date,
  closeprojectdate: Date,
  term: Number,
  _stage: [{ type: Schema.Types.ObjectId, ref: 'stages' }],
  state: String,
  finished: { type: Boolean, default: false }
});


mongoose.model('projects', projectSchema);
