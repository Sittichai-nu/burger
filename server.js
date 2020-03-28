// Dependencies
var express = require("express");
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');

// Create express app instance.
var app = express();

// Set the port of the application
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
var routes = require("../burger/controllers/burgers_controller");

app.use(routes);

// Start the server so that it can begin listening to client requests.
app.listen(PORT, function() {
    console.log("Server lidtening on: http://localhost:" + PORT);
});