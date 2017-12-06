const bodyPaser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const passport = require('passport');


//Set config file location
const config = require('./config/database');

//connect to mongoose
// mongoose.Promise = global.Promise;
mongoose.connect(config.database);

//connect to database
mongoose.connection.on('Connected', () => {
    console.log('Connect to Dadata ' +config.database);
});

mongoose.connection.on('Error', (err) => {
    console.log('Database error' +err);
});

const app = express();

//Port for Server
const port = 3000;

//set path for users
const users = require('./routes/users');

// CORS for cross domain get post patch delete
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//bodyParser Middleware
app.use(bodyPaser.json());

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//User route
app.use('/users', users);

//Index Route
app.get('/', (req, res) => {
    res.send('Now index front end page for Now Keep Smilling :) :) :) .');
});

//Start NodeJS Server
app.listen(port, () => {
    console.log('NodeJs Server Started On ' + port);
});

