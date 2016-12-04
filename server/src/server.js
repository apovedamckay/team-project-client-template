var database = require('./database.js')
var express = require('express');
var writeDocument = database.writeDocument;
var addDocument = database.addDocument;
var readDocument = database.readDocument;
var TeamReviewSchema = require('./schemas/teamReviewSchema.json');

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
});

app.get('/team/:teamid', function(req, res){
  var teamData = readDocument('teams', req.params.id);
  res.status(201);
  res.send(teamData);
});

function getTeamArray(){
  var teamArray = [];
  for(var i = 1; i < 4; i++){
    teamArray[i-1] = readDocument('teams', i);
  }
  return ({teams: teamArray});
}

app.get ('/team/', function(req, res){
  res.status(201);
  res.send(getTeamArray())
})


function postTeamReview(contents, teamNumber) {
      var team = readDocument('teams', teamNumber);

      team.reviews.push({
        "stars": [
            1, 2
        ],
        "text": contents
      });

      writeDocument('teams', team);
      // Return a resolved version of the feed item so React can
      // render it.
      return team ;
  }
  
  app.post('/teamReview',
    validate({ body: TeamReviewSchema }), function(req, res) {

    var body = req.body;
    // Check if requester is authorized to post this status update. // (The requester must be the author of the update.)
    var newUpdate = postTeamReview(body.contents, body.teamNumber);
    // When POST creates a new resource, we should tell the client about it // in the 'Location' header and use status code 201.
    res.status(201);
    res.set('Comment', newUpdate);
    // Send the update!
    res.send(newUpdate);
  });



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
