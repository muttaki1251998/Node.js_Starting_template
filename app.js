const express = require("express");
const ejs = require("ejs");
const path = require("path");
const mongoose = require("mongoose");

// Connect to database
const config = require('./config/database');
mongoose.connect(config.database);

// Mongodb connection success
mongoose.connection.on('connected', function(){
    console.log("Connected to database " + config.database);
});

// Database error
mongoose.connection.on('error', function(err){
    console.log("Error connection to database " + err);
});

// Init app
const app = express();

// Set Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Set Public folder
app.set(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res){
    res.send("Server page working");
})

// Start the server
const port = 3000;
app.listen(port, function()
{
    console.log("Server started on port " + port);
})