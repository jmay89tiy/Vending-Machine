const express = require('express');
const app = require('../app');
const assert = require('assert');
const sT = require('supertest');
const router = express.Router();





// goods inside machine with base pricing/quanity shown below
var goodsInside = [
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
    "quantity": 1
  }
]

router.route('/items')
  .get((req, res) => {
    var filtered = items.filter( (obj) => {
      return obj.quantity !== 0;
    })
    var model = {
      status: "success",
      data: filtered
    }
    res.json(model);
  });

router.route('/items/:itemId/purchase')
  .post((req, res) => {
    var item = req.body.title;
    var spentCash = req.body.spentCash;
    var pricing = req.body.pricing;
    var change = spentCash - pricing;
    var model = {}
    if (item.quantity === 0) {
      var model = {
        status: "fail",
        data: "Sorry, sold out"
      }
    } else {
      if (change < 0) {
        var model = {
          status: "fail",
          data: {
            spentCash: spentCash,
            pricing: pricing
          }}}
          
      if (change >= 0) {
        var model = {
          status: "success",
          data: {
            spentCash: spentCash,
            pricing: pricing,
            change: change
          }}}}
    res.json(model);
  });


// export below
module.exports = router;
