const express = require("express");

const Resource = require("./resource-model");

const router = express.Router();

router.get("/", (req, res) => {
  Resource.getResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get resource" });
    });
});

module.exports = router;
