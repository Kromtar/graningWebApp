const mongoose = require('mongoose');

const { Schema } = mongoose;

const stageSchema = new Schema({
  name: String,
  _review: [{ type: Schema.Types.ObjectId, ref: 'reviews' }],
  _project: { type: Schema.Types.ObjectId, ref: 'projects' }
});


mongoose.model('stages', stageSchema);
