'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const routes = require('./routes');
const config = require('./config').getEnv(process.env.NODE_ENV);

const app = express();
const dbURL = `mongodb://127.0.0.1:27017/${config.database}`;

MongoClient.connect(dbURL, function(err, db) {
  const database = db.db(config.database);
  database.createCollection('entries');
  routes(app);
})

app.listen(8000);

module.exports = app;
