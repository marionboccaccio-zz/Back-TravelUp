const express = require("express");
const itineraryModel = require("../models/Itinerary");
const router = new express.Router();

router.get("/", (req, res) => {
  console.log("hello");
  itineraryModel
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
  itineraryModel
    .findById(req.params.id)
    .populate("transportation")
    .populate("accomodation")
    .populate("activity")
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});

router.post("/", (req, res) => {
  itineraryModel
    .create(req.body)
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

router.delete("/:id", (req, res) => {
  itineraryModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

router.patch("/:id", (req, res) => {
  itineraryModel
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
