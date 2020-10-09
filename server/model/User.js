const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: String,
    password: String,
    address: { city: String, country: String },
    categories: [String],
    transactions:{}
})

const User = mongoose.model('User', userSchema)

module.exports = User