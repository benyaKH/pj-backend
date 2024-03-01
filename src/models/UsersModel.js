const mongoose = require('mongoose')

const collection = 'Users'

const userSchema =  mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
    
})

module.exports =mongoose.model(collection, userSchema)