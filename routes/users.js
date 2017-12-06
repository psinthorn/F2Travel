const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

//route for Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({
                success: false,
                msg: 'Falied to register user'
            });
        }else{
            res.json({
                success: true,
                msg: 'User registered'
            });
        }
    });
});

//route for Authentication
router.get('/authenticate', (req, res, next) => {
    res.send('Authenticatin Page');
});

//route for Profile
router.get('/profile', (req, res, next) => {
    res.send('Profile Page');
});


//route for Validate
router.get('/validate', (req, res, next) => {
    res.send('Validator Page');
});


module.exports = router;