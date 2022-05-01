const mongoose = require('mongoose')
//The user model
const User = new mongoose.Schema({
    fullname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phonenumber: {type: String, required: true},
    password: {type: String, required: true, unique: true},   },
{collecton: 'users'}
)

const model = mongoose.model('User', User)

module.exports = model

