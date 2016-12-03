var database = require('./database.js')
// Imports the express Node module.
var express = require('express');
// Creates an Express server.
var app = express();
// Defines what happens when it receives the `GET /` request
app.use(express.static('../client/build'));

/**
* Translate JSON Schema Validation failures into error 400s.
*/
app.use(function(err, req, res, next) {
if (err.name === 'JsonSchemaValidation') {
// Set a bad request http response status
res.status(400).end();
} else {
// It's some other sort of error; pass it to next error middleware handler
next(err);
}
});


// Reset database.
app.post('/resetdb', function(req, res) {
console.log("Resetting database...");
// This is a debug route, so don't do any validation.
database.resetDatabase();
// res.send() sends an empty response with status code 200
res.send();
});


// Starts the server on port 3000!
app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});