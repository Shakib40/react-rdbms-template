/* eslint-disable no-unused-vars */
var express = require('express');
const compression = require('compression');
const cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
app.use(compression());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

const sequelizeConnection = require('./src/helper/database');

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use((request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// ROUTES
app.use('/authentication', require('./src/routes/auth.routes'));

app.use((error, request, response, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  response.status(status).json({ message: message, data: data, status: 'FAILED' });
});

sequelizeConnection
  .sync()
  .then(() => {
    app.listen(5000, () => {
      console.log('\x1b[33m%s\x1b[0m', 'Server running on URL http://localhost:5000/');
    });
  })
  .catch((error) => {
    console.log('\x1b[31m%s\x1b[0m', 'Something went wrong while connecting to database.', error);
  });
