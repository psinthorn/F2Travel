const jwtStategy = require('passport-jwt').Stategy;
const extractJwt = require('passport-jwt').ExtractJwt;

const config = require('./database');
const User = require('../models/user');