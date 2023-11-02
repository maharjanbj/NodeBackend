const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email:{
        required:true,
        type: String,
        unique:true
    },
    password:{
        required:true,
        type: String
    },
    status:{
        default: 0,
        type: Number
    }
}, {timestamps:true})

module.exports = mongoose.model('User', userSchema)