const express = require("express");
const projectRouter = express.Router();
const Project = require("../models/project");

// projectRouter.get("/", (req, res) => {
//   res.send("hello word");
// });

//create a project and post it
//methode:post
//req.body
projectRouter.post("/", async (req, res) => {
  try {
    const newProject = new Project(req.body);
    let result = await newProject.save();
    res.status(200).send({ result: result, msg: "project added perfectly" });
  } catch (error) {
    res.status(500).send("can't save the project");
  }
});

//get all projects
//methode:get
projectRouter.get("/", async (req, res) => {
  try {
    let result = await Project.find();
    res.status(200).send({ result: result, msg: "all projects:" });
  } catch (error) {
    res.status(500).send("cannot get the projects");
  }
});

//get one project
//methode:get
//params
projectRouter.get("/:id", async (req, res) => {
  try {
    let result = await Project.findOne({ _id: req.params.id });
    res.status(200).send({ resu: result, msg: "this is the project.." });
  } catch (error) {
    res.status(500).send("cannot get the project");
  }
});

//update project
//methode:put
//req.body
//params

projectRouter.put("/:id", async (req, res) => {
  try {
    let result = await Project.findOneAndUpdate({
      _id: req.params.id,
      $set: { ...req.body },
    });
    res.status(200).send({ newProject: result, msg: "project updated..." });
  } catch (error) {
    res.status(500).send("cannot update the project..");
  }
});

//delete project
//methode:delete
//params

projectRouter.delete("/:id", async (req, res) => {
  try {
    let resut = await Project.findOneAndRemove({ _id: req.params.id });
    res.status(200).send({ msg: "project removed..." });
  } catch (error) {
    res.status(500).send("cannot delete the project..");
  }
});

module.exports = projectRouter;
