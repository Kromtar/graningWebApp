const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs');

//projects: [{ type: Schema.Types.ObjectId, ref: 'Projects' }],

const userSchema = new Schema({
  name: String,
  surname: String,
  company: String,
  address: String,
  department: String,
  phone1: String,
  phone2: String,
  creationDate: Date,
  workstation: String,
  _projects: [{ type: Schema.Types.ObjectId, ref: 'projects' }],
  email: { type: 'String', unique: true },
  password: String,
  role: String
});

userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

mongoose.model('users', userSchema);
