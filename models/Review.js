const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema({
  name: String,
  companytoclientdate: Date,
  clienttocompany: Date,
  _stage: { type: Schema.Types.ObjectId, ref: 'stages' },
  _project: { type: Schema.Types.ObjectId, ref: 'projects' }
});


mongoose.model('reviews', reviewSchema);
