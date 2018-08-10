const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const regUser = new Schema({
    fName: String,
    lName: String,
    email: String,
    cell: Number,
    profession: String,
    address: String,
    address2: String,
    city: String,
    state: String,
    zip: Number,
    username: String,
    pass: String,
    password: String,
    created: Date
});

module.exports =  mongoose.model('Register', regUser);
