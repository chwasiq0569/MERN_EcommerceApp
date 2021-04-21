const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

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

//.virtual function will help us to set the hashed password
userSchema.virtual('password').set(function(){
    this.hash_password = bcrypt.hashSync(this.password, 10);
})
//.methods function add instance method to each doc
userSchema.methods = {
    authenticate: function(){
       return bcrypt.compareSync(password, this.hash_password); // will return true or false
    }
}

const User = mongoose.Model('User', userSchema);



module.exports = User;