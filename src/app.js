const express = require('express');
const app = express();
const cors = require('cors');
const healthRoute = require('./Routes/health');
const personRoute = require('./Routes/person.route.js');
const authRoute = require('./Routes/auth.route.js');

/* MIDDLEWARE  */
const corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/* ROUTES */
app.use('/auth', authRoute);
app.use('/persons', personRoute);
app.use('/', healthRoute);


module.exports = app;