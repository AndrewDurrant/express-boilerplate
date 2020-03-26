require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

const morganOption = (process.env.NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.use((error, req, res, next) => { // eslint-disable-line no-unused-vars
  let message; // eslint-disable-line no-unused-vars
  if (process.env.NODE_ENV === 'production') {
    message = 'Server error';
  } else {
    console.log(error);
    message = error.message;
  }
  res.status(500).json({ error: error.message });
});

// if no route matches, return 404 with HTML page - Express default route

module.exports = app;