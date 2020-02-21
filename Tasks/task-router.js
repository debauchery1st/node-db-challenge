const express = require("express");

const Tasks = require("./task-model");

const router = express.Router();

router.get("/", (req, res) => {
  Tasks.getTasks()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get tasks" });
    });
});

router.post("/:id", (req, res) => {
  Tasks.addTask(req.body, req.params.id).then(newTask =>
    res.status(200).json(newTask)
  );
});

module.exports = router;
