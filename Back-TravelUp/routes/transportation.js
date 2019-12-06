const express = require("express");
const transportationModel = require("../models/Transportation");
const router = new express.Router();

router.get("/", (req, res) => {
  console.log("hello");
  transportationModel
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
  transportationModel
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
  transportationModel
    .create(req.body)
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

router.delete("/:id", (req, res) => {
  transportationModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

router.patch("/:id", (req, res) => {
  transportationModel
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
