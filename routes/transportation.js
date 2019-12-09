const express = require("express");
const transportationModel = require("../models/Transportation");
const router = new express.Router();

router.get("/itinerary/:id", (req, res) => {
  console.log("hello");
  transportationModel
    .find()
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/itinerary/:id", (req, res) => {
  transportationModel
    .findById(req.params.id)
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/itinerary/:id", (req, res) => {
  transportationModel
    .create(req.body)
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.delete("/itinerary/:id", (req, res) => {
  transportationModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.patch("/itinerary/:id", (req, res) => {
  transportationModel
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
