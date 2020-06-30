const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const router = require("express").Router();
const Transaction = require("../models/workout.js");

router.post("/api/workouts/", (req, res) => {
  Transaction.create({})
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/transaction/bulk", ({ body }, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  console.log("in apiRoutes")
  Transaction.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/stats", (req, res) => {
  console.log("in apiRoutes")
  Transaction.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put('/api/workouts/:id',(req, res) =>{
  Transaction.findByIdAndUpdate(
      req.params.id,
      {$push: {exercises: req.body}},
      // {new: true, runValidators: true}
  )
  .then(dbWorkout => {
      res.json(dbWorkout);
  })
  .catch(err => {
      res.json(err);
  })
});

router.get("/api/workouts/range", (req, res) => {
  Transaction.find({}, (error, data) => {
      if (error) {
          res.send(error);
      } else {
          res.json(data);
      }
  });
});

module.exports = router;