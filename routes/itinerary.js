const express = require("express");
const itineraryModel = require("../models/Itinerary");
const router = new express.Router();

router.get("/itinerary/", (req, res) => {
  itineraryModel
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
  itineraryModel
    .findById(req.params.id)
    .populate("steps.transportation")
    .populate("accomodation")
    .populate("activity")
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/itinerary", (req, res) => {
  console.log(req.body);
  console.log("ici");
  itineraryModel
    .create(req.body)
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/itinerary/:id", (req, res) => {
  itineraryModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.patch("/itinerary/:id", (req, res) => {
  itineraryModel
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
