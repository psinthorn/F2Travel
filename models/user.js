
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const config = require('../config/database');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', userSchema);

module.exports.findById = function(id, callback){
    User.findById(id, callback);
};

module.exports.getUserbyEmail = function(email, callback){
    const query = {email: email};
    User.findOne(query, callback);
};

module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt) =>{
        bcrypt.hash(newUser.password, salt, (err, hash ) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};