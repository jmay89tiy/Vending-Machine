const express = require("express");
const {getAllItems, buyItem, getAllPurchases, getTotalMoney, addItem, updateItem} = require("./dal");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//**************************
// routes pictured below 
//**************************

app.get("/vending/customer/items", function(req, res) {
  getAllItems().then(function(items) {
    res.json({status: "Success", data: items, "description": "Charizard holographic, 1st edition",
    "cost": 150,
    "quantity": 1,
    "description": "Loose cigarette, aka 'a lucy'",
    "cost": 100,
    "quantity": 5,
     "description": "An old fortune cookie",
    "cost": 50,
    "quantity": 5,
     "description": "A spaghetti flavored lollypop",
    "cost": 75,
    "quantity": 1
});
  })
});

//************************** 
// post/get for purchases
//************************** 

app.post("/vending/customer/items/:itemId/purchases", function(req, res) {
  buyItem(req.body.item, req.body.money).then(function(obj) {
    res.json(obj)
  })
});

app.get("/vending/vendor/purchases", function(req, res) {
  getAllPurchases().then(function(purchases) {
    res.json({status: "Success", data: purchases});
  })
});

//*************************** 
// get for money
//***************************

app.get("/vending/vendor/money", function(req, res) {
  getTotalMoney().then(function(amount) {
    res.json({status: "Success", data: amount})
  })
});

//*************************** 
// post/put for items 
//*************************** 

app.post("/vending/vendor/items", function(req, res) {
  addItem(req.body).then(function(obj) {
    res.json({status: "Success", data: obj});
  });
});

app.put("/vending/vendor/items/:itemId", function(req, res) {
  updateItem(req.body).then(function(obj) {
    res.json({status: "Success", data: obj});
  })
})

//**************************** 
//port echo below
//**************************** 

app.listen(3000, function () {
  console.log("Vendomatic is online at port:3000");
});