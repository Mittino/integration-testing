'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

app.use(bodyParser.json());
app.use(cookieParser());

switch (app.get('env')) {
  case 'development':
    app.use(morgan('dev'));
    break;

  case 'production':
    app.use(morgan('short'));
    break;

  default:
}

const puppies = require('./routes/puppies');
app.use('/puppies', puppies);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
