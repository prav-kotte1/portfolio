const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: [String], // Each bullet point in the description
  link: String
});

module.exports = mongoose.model('Project', projectSchema);
