const express = require('express');
const app = express();
const healthRoute = require('./Routes/health');
const personRoute = require('./Routes/personRoute');

/* ROUTES */
app.use('/', healthRoute);
app.use('/persons', personRoute);


module.exports = app;