const express = require("express");
const activityModel = require("../models/Activity");
const router = new express.Router();

router.get("/", (req, res) => {
  console.log("hello");
  activityModel
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
  activityModel
    .findById(req.params.id)
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
});

router.post("/", (req, res) => {
  activityModel
    .create(req.body)
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

router.delete("/:id", (req, res) => {
  activityModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

router.patch("/:id", (req, res) => {
  activityModel
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
