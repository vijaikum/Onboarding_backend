const mongoose = require('mongoose')

const UsersSchema = mongoose.Schema({
    userId: String,
    password: String,
    roles:String
})

module.exports = mongoose.model('users', UsersSchema);