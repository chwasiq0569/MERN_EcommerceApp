const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: String,
        trim: true,
        min: 3,
        max: 30
    },
    lastName: {
        type: String,
        required: String,
        trim: true,
        min: 3,
        max: 30
    },
    username: {
        type: String,
        required: String,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: String,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: String,
        trim: true,
        unique: true,
        lowercase: true
    },
    hash_password: {
        type: String,
        required: String,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'admin'
    },
    contact: {type: String},
    profilePicture: {type: String}

}, { timestamps: true })

const User = mongoose.Model('User', userSchema);

module.exports = User;