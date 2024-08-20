//import dotenv
require('dotenv').config();
//import express
const express = require('express');
//config view engine
const configViewEngine = require('./config/viewEngine');
//config database connection
const connection = require('./config/database');
//routers
const webRouter = require('./routes/web');
//app express
const app = express();
//port, hostname
const port = process.env.PORT
const hostname = process.env.HOSTNAME;

//config template engine
configViewEngine(app);

//Config request.body by using express.json() and express.urlencoded
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//routes
app.use(webRouter);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});

