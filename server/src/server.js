var database = require('./database.js')
var express = require('express');
var writeDocument = database.writeDocument;
var addDocument = database.addDocument;
var readDocument = database.readDocument;
var validate = require('express-jsonschema').validate;


var app = express();
app.use(express.static('../client/build'));

function getUserIdFromToken(authorizationLine) {
  try {
    // Cut off "Bearer " from the header value.
    var token = authorizationLine.slice(7);
    // Convert the base64 string to a UTF-8 string.
    var regularString = new Buffer(token, 'base64').toString('utf8');
    // Convert the UTF-8 string into a JavaScript object.
    var tokenObj = JSON.parse(regularString);
    var id = tokenObj['id'];
    // Check that id is a number.
    if (typeof id === 'number') {
    return id;
    } else {
    // Not a number. Return -1, an invalid ID.
    return -1;
    }
  } catch (e) {
// Return an invalid ID.
return -1;
}
}

//get user data
function getUserData(userid){
	var user = readDocument('users', userid);
	return user;
}

app.get('/user/:userid/profile', function(req, res) {
  var userid = parseInt(req.params.userid, 10);
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  if(fromUser === userid) {
    // send response
    res.status(201);
    res.send(getUserData(userid));
  } else {
    res.status(401).end();
  }
});

//get sport data
function getSportData(){
	var sportsArray = [];
	for(var i = 1; i < 8; i++){
		sportsArray[i-1] = readDocument("sports", i);
	}
	return ({sports: sportsArray});
}

app.get('/sport/', function(req, res){
  res.status(201);
  res.send(getSportData())
})

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
