'use strict';

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const routes = require('./routes');

const app = express();
const url = 'mongodb://127.0.0.1:27017/obscure_sorrows_dev';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  routes(app);
})

app.listen(8000);

module.exports = app;
