'use strict';

const express = require('express');

const routes = require('./routes');
const app = express();

routes(app);

app.listen(8000);

module.exports = app;
