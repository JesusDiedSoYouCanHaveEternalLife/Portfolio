const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const cors = require('cors');
const app = express();

let indexRouter = require('../app/routers/index');
let projectsRouter = require('../app/routers/projects');
let referencesRouter = require('../app/routers/references');
let servicesRouter = require('../app/routers/services');
let usersRouter = require('../app/routers/users');

app.use(logger('dev'));

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define paths for the routers
app.use('/', indexRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/references', referencesRouter);
app.use('/api/services', servicesRouter);
app.use('/api/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({
    success: false,
    message: err.message
  });
});

module.exports = app;