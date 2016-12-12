var express = require('express');
var app = express();

var ReviewSchema = require('./schemas/ReviewSchema.json');
var ForumPostSchema = require('./schemas/ForumPostSchema.json');
var validate = require('express-jsonschema').validate;
var mongo_express = require('mongo-express/lib/middleware');
// Import the default Mongo Express configuration
var mongo_express_config = require('mongo-express/config.default.js');
var ResetDatabase = require('./resetdatabase');
var bodyParser = require('body-parser');

//TO BE REMOVED
var database = require('./database.js')
var writeDocument = database.writeDocument;
var addDocument = database.addDocument;
var readDocument = database.readDocument;

app.use('/mongo_express', mongo_express(mongo_express_config));
app.use(express.static('../client/build'));
app.use(bodyParser.text());
app.use(bodyParser.json());

var MongoDB = require('mongodb');
var MongoClient = MongoDB.MongoClient;
var ObjectID = MongoDB.ObjectID;
var url = 'mongodb://localhost:27017/MatchUp';

MongoClient.connect(url, function(err, db) {

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
function getUserData(userid, callback){
  db.collection('users').findOne({
    _id: userid
  }, function (err, userData) {
    if (err) return callback(err);
    else if(userData === null) {
      return callback(null, null);
    }
    callback(null, userData)
  });
}

app.get('/user/:userid/profile', function(req, res) {
 var userid = req.params.userid;
 console.log(userid);
    getUserData(new ObjectID(userid), function(err, userData) {
      if (err) {
        // A database error happened.
        // Internal Error: 500.
        res.status(500).send("Database error: " + err);
      } else if (userData === null) {
        // Couldn't find the feed in the database.
        res.status(400).send("Could not look up feed for user " + userid);
      } else {
        // Send data.
        res.send(userData);
      }
    });
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

function getTeamData(teamid){
  var team = readDocument('teams', teamid);
  return team;
}

app.get('/team/:teamid', function(req, res){
  var teamId = parseInt(req.params.teamid, 10)
  res.status(201);
  res.send(getTeamData(teamId));
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

//Both User and Team Reviews
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

app.post('/teamReview', validate({ body: ReviewSchema }), function(req, res) {
  var body = req.body;
  // Check if requester is authorized to post this status update. // (The requester must be the author of the update.)
  var newUpdate = postTeamReview(body.contents, body.id);
  // When POST creates a new resource, we should tell the client about it // in the 'Location' header and use status code 201.
  res.status(201);
  res.set('Comment', newUpdate);
  // Send the update!
  res.send(newUpdate);
});

  function postUserReview(contents, userid, callback) {
      var newReview = {
        "stars": [1, 2],
        "text": contents
      };
      db.collection('users').updateOne({ _id: userid },
        {
          $push: {player_review: newReview}
        }, 
        function(err) {
          if (err) {
            return callback(err);
          }
          callback(null, newReview);
      });
    }

  app.post('/userReview', validate({ body:  ReviewSchema}), function(req, res) {
  var body = req.body;
  console.log("review " + body.id);
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  if(fromUser === body.id){
    res.status(401).end();
  }
  else{
  postUserReview(body.contents, new ObjectID(body.id), function(err, userData) {
      if (err) {
        // A database error happened.
        // Internal Error: 500.
        res.status(500).send("Database error: " + err);
      } else if (userData === null) {
        // Couldn't find the feed in the database.
        res.status(400).send("Could not look up feed for user " + body.id);
      } else {
        // Send data.
        res.send(userData);
      }
    });
}
});


function postChallenge(challenger, challengedate, challengetime, teamNumber) {
  var team = readDocument('teams', teamNumber);
  team.Challenges.push({
    "challenger": challenger,
    "challengedate": challengedate,
    "challengetime": challengetime
  });
  writeDocument('teams', team);
  return team;
}

app.post('/challenge', function(req, res) {
  var body = req.body;
  var newUpdate = postChallenge(body.challenger,body.challengedate,body.challengetime,body.teamNumber);
  res.status(201);
  res.set('challenge', newUpdate);
  res.send(newUpdate);
});

function postForumPost(author, contents, teamNumber) {
  var team = readDocument('teams', teamNumber);
  team.posts.push({
    "author": author,
    "text": contents
  });
  writeDocument('teams', team);
  return team;
}

app.post('/forumPost', validate({ body: ForumPostSchema }), function(req, res) {
  var body = req.body;
  var newForumPost = postForumPost(body.author, body.contents, body.teamNumber);
  res.status(201);
  res.set('Comment', newForumPost);
  res.send(newForumPost);
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


/// Reset the database.
app.post('/resetdb', function(req, res) {
  console.log("Resetting database...");
  ResetDatabase(db, function() {
    res.send();
  });
});



// Starts the server on port 3000!
app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});

});