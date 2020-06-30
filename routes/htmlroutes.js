const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const router = require("express").Router();
const Transaction = require("../models/workout.js");

// router.post("/api/workouts/", (req, res) => {
//     Transaction.create({})
//       .then(dbTransaction => {
//         res.json(dbTransaction);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
// });

router.get("/exercise", (req, res) => {
    res.sendFile("./exercise.html", { root: path.join(__dirname, '../public') });
});

router.get("/stats", (req, res) => {
    res.sendFile("./stats.html", { root: path.join(__dirname, '../public') });
});

// router.put('/api/workouts/:id',(req, res) =>{
//     Transaction.findByIdAndUpdate(
//         req.params.id,
//         {$push: {exercises: req.body}},
//         // {new: true, runValidators: true}
//     )
//     .then(dbWorkout => {
//         res.json(dbWorkout);
//     })
//     .catch(err => {
//         res.json(err);
//     })
// });
            
router.delete("/clearall", (req, res) => {
    Transaction.remove({}, (error, response) => {
        if (error) {
            res.send(error);
        } else {
            res.send(response);
        }
    });
});

// router.get("/api/workouts/range", (req, res) => {
//     Transaction.find({}, (error, data) => {
//         if (error) {
//             res.send(error);
//         } else {
//             res.json(data);
//         }
//     });
// });

router.get("/", (req, res) => {
    db.notes.find({}, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.json(data);
        }
    });
});
            
module.exports = router;