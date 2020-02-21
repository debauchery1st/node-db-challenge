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

router.post("/", (req, res) => {
  Resource.addResource(req.body).then(newResource =>
    res.status(200).json(newResource)
  );
});

module.exports = router;
