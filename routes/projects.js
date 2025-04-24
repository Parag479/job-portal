const express = require('express');
const Project = require('../models/Project');
const generateSummary = require('../utils/generateSummary');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { title, description, tags } = req.body;
    const summary = await generateSummary(title, tags, description);
    const project = new Project({ ...req.body, summary });
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    next(err);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

module.exports = router;