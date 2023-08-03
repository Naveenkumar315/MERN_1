const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    Age: Number
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel