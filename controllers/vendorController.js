const express = require('express');
const app = require('../app');
const superTest = require('supertest');
const assert = require('assert');
const moment = require('moment');
const router = express.Router();

var purchases = [
    {
      "id": '1',
      "description": "purple drink",
      "cost": 75,
      "quantity": 5
    },
    {
      "id": '2',
      "description": "red drink",
      "cost": 75,
      "quantity": 5
    },
    {
      "id": '3',
      "description": "orange drink",
      "cost": 75,
      "quantity": 5
    },
    {
      "id": '4',
      "description": "yellow drink",
      "cost": 100,
      "quantity": 5
    },
    {
      "id": '5',
      "description": "green drink",
      "cost": 100,
      "quantity": 5
    },
    {
      "id": '6',
      "description": "pink drink",
      "cost": 100,
      "quantity": 5
    },
    {
      "id": '7',
      "description": "black drink",
      "cost": 100,
      "quantity": 5
    },
    {
      "id": '8',
      "description": "rainbow drink",
      "cost": 125,
      "quantity": 5
    },
    {
      "id": '9',
      "description": "a loose cigarette",
      "cost": 150,
      "quantity": 5
    },
    {
      "id": '10',
      "description": "a voucher for private coding lessons"
      "cost": 300,
      "quantity": 0
    }
  ]

var cashMoney = 500;

//
for (i = 0; i < purchases.length; i++) {
  cashMoney -= purchases[i].cost;
}

var items = [
  {
    "id": '1',
    "description": "purple drink",
    "cost": 75,
    "quantity": 5
  },
  {
    "id": '2',
    "description": "red drink",
    "cost": 75,
    "quantity": 5
  },
  {
    "id": '3',
    "description": "orange drink",
    "cost": 75,
    "quantity": 5
  },
  {
    "id": '4',
    "description": "yellow drink",
    "cost": 100,
    "quantity": 5
  },
  {
    "id": '5',
    "description": "green drink",
    "cost": 100,
    "quantity": 5
  },
  {
    "id": '6',
    "description": "pink drink",
    "cost": 100,
    "quantity": 5
  },
  {
    "id": '7',
    "description": "black drink",
    "cost": 100,
    "quantity": 5
  },
  {
    "id": '8',
    "description": "rainbow drink",
    "cost": 125,
    "quantity": 5
  },
  {
    "id": '9',
    "description": "a loose cigarette",
    "cost": 150,
    "quantity": 5
  },
  {
    "id": '10',
    "description": "a voucher for private coding lessons"
    "cost": 300,
    "quantity": 0
  }
]


//router below for item, cashMoney, purchases, itemId
// include status/data keys
router.route('/purchases')
  .get((req, res) => {
    var model = {
      status: "success",
      data: purchases
    }
    res.json(model);
  });

router.route('/cashMoney')
  .get((req, res) => {
    var total = 0;
    for (i = 0; i < purchases.length; i++) {
      total += purchases[i].cost;
    }
    var model = {
      status: "success",
      data: total
    }
    res.json(model);
  });

router.route('/items')
  .post((req, res) => {
    item = req.body;
    items.push(item);
    var model = {
      status: "success",
      data: item
    }
    res.json(model);
  });

router.route('/items/:itemId')
  .put((req, res) => {
    var item = items.filter((obj) => {
      return obj.id === req.body.id;
    })
    item[0].description = req.body.description;
    item[0].cost = req.body.cost;
    item[0].quantity = req.body.quantity;
    var model = {
      status: "success",
      data: item
    }
    res.json(model);
  });



//export below
module.exports = router;
