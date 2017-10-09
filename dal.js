const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const url = 'mongodb://localhost:27017/vending';
const Item = require('./item');
const Purchase = require("./purchase")

mongoose.connect(url, {useMongoClient: true});


//retrieves list of all items based off of their schema design
function getAllItems() {
  return Item.find();
}

function buyItem(id, money) {
  return Item.findOne({"_id":id}).then(function(item) {
    if (money < item.cost) {
      return {"status": "failed", "data":"You need to pony up some more change, bum"}
    } else if (item.quantity < 1) {
      return {"status": "failed", "data":"Sold out, sorry! Rare pokemon cards man, can't keep them on the shelf!"}
    } else {
      Item.updateOne(item,
      {$set: {"quantity": item.quantity - 1}
      })
      let newBuy = new Purchase({
        description: item.description,
        cost: item.cost,
        time: Date.now()
      });
      newBuy.save();
      return {"status": "Success", "data": {"your item": newBuy, "your change": money - item.cost}}
    }
  })
}

// shows all purchases currently
function getAllPurchases() {
  return Purchase.find();
}

// shows total money present
function getTotalMoney() {
  return Purchase.find().then(function(purchases) {
    let total = 0;
    for (i=0; i < purchases.length; i++) {
      total += purchases[i].cost;
    }
    return total;
  })
}

// adds a new item, based on crud event
function addItem(item) {
  let newItem = new Item(item);
  return newItem.save();
}

// updates a current item including newDesc,newCost,newQuanity
function updateItem(delta) {
  return Item.findOne({"_id":delta._id}).then(function(item) {
    let newDescription;
    let newCost;
    let newQuantity;
    if (delta.description) {
      newDescription = delta.description;
    } else {
      newDescription = item.description;
    }
    if (delta.cost) {
      newCost = delta.cost;
    } else {
      newCost = item.cost;
    }
    if (delta.quantity) {
      newQuantity = delta.quantity;
    } else {
      newQuantity = item.quantity;
    }
    return Item.updateOne(item,
    {$set: {"description": newDescription,
    "cost": newCost,
    "quantity": newQuantity}
    })
  })
}

//************************
// module exports below    
//************************
module.exports = {
  getAllItems,
  buyItem,
  getAllPurchases,
  getTotalMoney,
  addItem,
  updateItem
}