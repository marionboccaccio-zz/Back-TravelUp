const express = require("express");
const tripModel = require("../models/Trip");
const router = new express.Router();

router.get("/", (req, res) => {
    console.log("hello");
    tripModel
    .find()
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});

router.get("/:id", (req, res) => {
    tripModel
    .findById(req.params.id)
    .populate ("transportation")
    .populate ( "accomodation")
    .populate ( "activity")
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});

router.post("/", (req, res) => {
    tripModel
    .create(req.body)
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

router.delete("/:id", (req, res) => {
    tripModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

router.patch("/:id", (req, res) => {
    tripModel
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});

module.exports = router;
