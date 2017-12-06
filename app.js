const bodyPaser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const passport = require('passport');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Now index front end page for Now Keep Smilling :) :) :) .');
});

app.listen(port, () => {
    console.log('NodeJs Server Started On ' + port);
});

