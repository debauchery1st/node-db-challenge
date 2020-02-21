const express = require("express");
const helmet = require("helmet");
const server = express();

const projectsRouter = require("./projects/project-router");
const resourceRouter = require("./Resources/resource-router");
const taskRouter = require("./Tasks/task-router");

server.use(express.json());
server.use(helmet());

server.use("/api/projects", projectsRouter);
server.use("/api/tasks", taskRouter);
server.use("/api/resources", resourceRouter);

server.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "Sprint Challenge: Node DB Sprint\n\nDescription\nIn this challenge, you design and build a Data Model and a RESTful API that stores data into a Relational Database."
    );
});

module.exports = server;
