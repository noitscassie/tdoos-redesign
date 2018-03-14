'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const config = require('./config').getEnv(process.env.NODE_ENV);

const app = express();
const dbURL = `mongodb://127.0.0.1:27017/${config.database}`;

mongoose.connect(dbURL);
const db = mongoose.connection;

db.once('open', function() {
  db.createCollection('entries');
  routes(app);
});

app.listen(8000);

module.exports = app;
