require('dotenv').config()
require("./api/db/db.js");
const express = require("express"),
app = express(),
Coniguration = require('./appconfig.js');

// api routes
const apiroutes = require("./api/routes");

Coniguration.ConfigApp(app)

// API Route Setup
app.use('/api', apiroutes);

// declaring ports
const port = process.env.PORT;

// listening to port and logging
app.listen(port);
console.log("Application is running on " + port);

module.exports = app;