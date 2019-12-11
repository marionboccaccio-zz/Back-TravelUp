const express = require("express");
const accomodationModel = require("../models/Accomodation");
const router = new express.Router();
const itineraryModel = require("../models/Itinerary");

router.get("/accomodation", (req, res) => {
  console.log("hello");
  accomodationModel
    .find()
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/accomodation/:id", (req, res) => {
  accomodationModel
    .findById(req.params.id)
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/accomodation/:itineraryId/:stepId", (req, res) => {
  accomodationModel
    .create(req.body)
    .then(dbRes => {
      itineraryModel
        .findOneAndUpdate(
          {
            _id: req.params.itineraryId,
            "steps._id": req.params.stepId
          },
          { $addToSet: { "steps.$.accomodation": dbRes._id } },
          { new: true }
        )
        .then(dbRes2 => {
          res.status(200).json(dbRes2);
        })
        .catch(err => console.log(err));
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.delete("/accomodation:id", (req, res) => {
  accomodationModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.patch("/accomodation/:id", (req, res) => {
  accomodationModel
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
