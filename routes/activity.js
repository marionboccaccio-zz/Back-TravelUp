const express = require("express");
const activityModel = require("../models/Activity");
const router = new express.Router();
const itineraryModel = require("../models/Itinerary");

router.get("/activity", (req, res) => {
  console.log("hello");
  activityModel
    .find()
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/activity/:id", (req, res) => {
  activityModel
    .findById(req.params.id)
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/activity/:itineraryId/:stepId", (req, res) => {
  activityModel
    .create(req.body)
    .then(dbRes => {
      itineraryModel
        .findOneAndUpdate(
          {
            _id: req.params.itineraryId,
            "steps._id": req.params.stepId
          },
          { $addToSet: { "steps.$.activity": dbRes._id } },
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

router.delete("/activity/:id", (req, res) => {
  activityModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.patch("/activity/:id", (req, res) => {
  activityModel
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
