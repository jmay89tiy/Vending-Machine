const express = require('express');
const controller = require('./controllers/index');
const app = express();

// get '/items'
// get all items db
// send obj with data value
// return array of items objects
//
// --
//
// post '/items'
// get req.body.request
// apply req.body to new model instance
// save new model to db
//
// --
//
// get 'items/:id'
// get id form req.params
// get model instance from db where id matches req.params
// send json object ot client wiht model
//
// --
//
// delete '/items/:id'
// get id from req.paramsfind model instance from db where id matches req.paramsfinddelete model instance from db
// send client success code (if you're nice
// 


app.listen(3000);
console.log('Express server listening on port: 3000');
