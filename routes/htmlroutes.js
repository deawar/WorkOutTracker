const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const router = require("express").Router();
const Transaction = require("../models/workout.js");
//const app = express();



router.post("/submit", (req, res) => {
    console.log(req.body);
    
    db.notes.insert(req.body, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data);
        }
    });
});

router.get("/exercise", (req, res) => {
    res.sendFile("./exercise.html", { root: path.join(__dirname, '../public') });
});

router.post("/submit", (req, res) => {
    console.log(req.body);
    
    db.notes.insert(req.body, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data);
        }rs
    });
});

router.get("/find/:id", (req, res) => {
    db.notes.findOne(
        {
            _id: mongojs.ObjectId(req.params.id)
        },
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        }
        );
});
    
router.post("/update/:id", (req, res) => {
    db.notes.update(
        {
            _id: mongojs.ObjectId(req.params.id)
        },
        {
            $set: {
                title: req.body.title,
                note: req.body.note,
                modified: Date.now()
            }
        },
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        }
        );
});
        
router.delete("/delete/:id", (req, res) => {
    db.notes.remove(
        {
            _id: mongojs.ObjectID(req.params.id)
        },
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        }
        );
});
            
router.delete("/clearall", (req, res) => {
    db.notes.remove({}, (error, response) => {
        if (error) {
            res.send(error);
        } else {
            res.send(response);
        }
    });
});
            
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