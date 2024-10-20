const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const projectRoutes = require('./routes/projectRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', projectRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error('MongoDB connection failed:', error));
