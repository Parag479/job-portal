const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const projectsRoutes = require('./routes/projects');
const companiesRoutes = require('./routes/companies');
const applyRoutes = require('./routes/apply');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/projects', projectsRoutes);
app.use('/companies', companiesRoutes);
app.use('/apply', applyRoutes);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

module.exports = app;