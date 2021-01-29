const config = require('./utils/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const usersRouter = require('./controllers/users');
const notesRouter = require('./controllers/notes');
const middleware = require('./utils/middleware');

console.log('connecting to ', config.MONGODB_URI);

mongoose.connect(config.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message);
  });

app.use(express.json());
app.use(middleware.requestLogger);
app.use(cors());
app.use(express.static('build'));
app.use('/api/users', usersRouter);
app.use('/api/notes', notesRouter);

app.use(middleware.unknownEndpoint);

app.use(middleware.errorHandler);

module.exports = app;