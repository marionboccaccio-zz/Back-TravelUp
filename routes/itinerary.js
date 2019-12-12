const express = require("express");
const itineraryModel = require("../models/Itinerary");
const router = new express.Router();
const uploader = require("./../config/cloudinary");

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
    .populate("steps.accomodation")
    .populate("steps.activity")
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/itinerary", uploader.single("itineraryImage"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  const newItinerary = JSON.parse(req.body.fields);
  if (req.file) newItinerary.itineraryImage = req.file.secure_url;
  // console.log("newItinerary ? :", newItinerary);
  console.log("newItinerary ? :", newItinerary.steps);
  console.log("newItinerary ? :", newItinerary.description);

  itineraryModel
    .create(newItinerary)
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(err => {
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
