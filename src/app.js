const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(require('./routes/index.routes'));

module.exports = app;