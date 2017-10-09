
const mongoose = require('mongoose');


//***********************
//purchase schema below
//*********************** 


const PurchaseSchema = new mongoose.Schema({
  description: { type: String },
  cost: { type: Number },
  time: { type: Date }
});

const Purchase = mongoose.model('Purchase', PurchaseSchema);



//************************
// module exports below
//************************ 
module.exports = Purchase;