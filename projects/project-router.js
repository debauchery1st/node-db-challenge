const express = require("express");

const Projects = require("./project-model");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.getProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.post("/", (req, res) => {
  Projects.addProject(req.body).then(newProject =>
    res.status(200).json(newProject)
  );
});

module.exports = router;
