const express = require("express");
const transportationModel = require("../models/Transportation");
const router = new express.Router();
const itineraryModel = require("../models/Itinerary");

router.get("/transportation", (req, res) => {
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

router.get("/transportation/:id", (req, res) => {
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

router.post("/transportation/:itineraryId/:stepId", (req, res) => {
  // console.log(req.params);
  console.log(req.body);
  transportationModel
    .create(req.body)
    .then(dbRes => {
      itineraryModel
        .findOneAndUpdate(
          {
            _id: req.params.itineraryId,
            "steps._id": req.params.stepId
          },
          { $addToSet: { "steps.$.transportation": dbRes._id } },
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

router.delete("/transportation/:id", (req, res) => {
  transportationModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.patch("/transportation/:id", (req, res) => {
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
