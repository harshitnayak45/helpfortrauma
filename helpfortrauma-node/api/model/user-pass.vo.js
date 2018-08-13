const mongoose = require('mongoose');
const Register = require('./user-info.vo');

const Schema = mongoose.Schema;
const regUserPass = new Schema({
  usrId: { type: Schema.Types.ObjectId, ref: 'Register' },
  pass: String
});

module.exports =  mongoose.model('Password', regUserPass);
