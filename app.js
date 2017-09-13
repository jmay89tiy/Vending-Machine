const express = require('express');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const controller = require('./controllers/index');
const app = express();
const router = require('express').Router();

const customersController = require('./controllers/customerController');
const vendorsController = require('./controllers/vendorController');

app.use(bodyParser.json());
app.use('/api/vendors', controller.vendorController);
app.use('/api/customers', controller.customerController);


var mw = function (req, res, next) {
    console.log("Middleware is online and operational Captain");
    next();
}

app.get('/', (req, res) => {
    res.send('Dispensary API Root');
});

module.exports = app;
