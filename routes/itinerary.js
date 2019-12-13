const express = require("express");
const itineraryModel = require("../models/Itinerary");
const router = new express.Router();
const uploadImage = require("../config/cloudinary");
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
    // .populate("steps.transportation")
    // .populate("steps.accomodation")
    // .populate("steps.activity")
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/itinerary", uploadImage.single("itineraryImage"), (req, res) => {
  console.log(req.body);
  const itinerary = JSON.parse(req.body.fields);
  if (req.file) itinerary.itineraryImage = req.file.secure_url;

  console.log("ici", itinerary);
  itineraryModel
    .create(itinerary)
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
