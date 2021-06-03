"use strict";

const resetDB = require("../config/scripts/populateDB")

const Tutor = require("./schema/Tutor");

const express = require("express");
const router = express.Router();


// completely resets your database.
// really bad idea irl, but useful for testing
router.route("/reset")
    .get((_req, res) => {
        resetDB(() => {
            res.status(200).send({
                message: "Data has been reset."
            });
        });
    });

router.route("/")
    .get((_req, res) => {
        console.log("GET /");
        res.status(200).send({
            data: "App is running."
        });
    });
    
// ---------------------------------------------------
// Edit below this line
// ---------------------------------------------------
router.route("/tutors")
    .get((req, res) => {
        console.log("GET /tutors");

        // already implemented:
        Tutor.find({})
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    })
    .post((req, res) => {
        console.log("POST /tutors");
        res.status(501).send();
    });

    
router.route("/tutors/:id")
    .get((req, res) => {
        console.log(`GET /tutors/${req.params.id}`);
        Tutor.findById(req.params.id)
            .then(doctor => {
                if (doctor) {
                    res.status(200).send(doctor);
                } else {
                    res.status(404).send({message: `Tutor with id \"${req.params.id}\" does not exist in your database.`});
                }
            })
            .catch(err => {
                res.status(404).send({message: `Tutor with id \"${req.params.id}\" does not exist in your database.`});
            });
    })
    .patch((req, res) => {
        console.log(`PATCH /tutors/${req.params.id}`);
        Tutor.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then(doctor => {
                if (doctor) {
                    res.status(200).send(doctor);
                } else {
                    res.status(404).send({message: `Tutor with id \"${req.params.id}\" does not exist in your database.`});
                }
            })
            .catch(err => {
                res.status(404).send({message: `Tutor with id \"${req.params.id}\" does not exist in your database.`});
            });    })
    .delete((req, res) => {
        console.log(`DELETE /tutors/${req.params.id}`);
        Tutor.findOneAndDelete({ _id: req.params.id })
            .then(result => {
                if (result) {
                    // console.log(result);
                    res.status(200).send(null);
                } else {
                    res.status(404).send({message: `Tutor with id \"${req.params.id}\" does not exist in your database.`});
                }
            })
            .catch(err => {
                res.status(404).send({message: `Tutor with id \"${req.params.id}\" does not exist in your database.`});
            });    });
    

module.exports = router;