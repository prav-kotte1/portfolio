const express = require('express');
const Project = require('../models/projectModel');
const router = express.Router();

router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
