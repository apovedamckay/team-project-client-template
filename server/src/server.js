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

app.use('/mongo_express', mongo_express(mongo_express_config));
app.use(express.static('../client/build'));
app.use(bodyParser.text());
app.use(bodyParser.json());

var MongoDB = require('mongodb');
var MongoClient = MongoDB.MongoClient;
var ObjectID = MongoDB.ObjectID;
var url = 'mongodb://localhost:27017/MatchUp';

MongoClient.connect(url, function(err, db) {

/**
 * Get the user ID from a token. Returns -1 (an invalid ID) if it fails.
 */
function getUserIdFromToken(authorizationLine) {
  try {
    // Cut off "Bearer " from the header value.
    var token = authorizationLine.slice(7);
    // Convert the base64 string to a UTF-8 string.
    var regularString = new Buffer(token, 'base64').toString('utf8');
    // Convert the UTF-8 string into a JavaScript object.
    var tokenObj = JSON.parse(regularString);
    var id = tokenObj['id'];
      if (typeof id === 'string') {
        return id;
      } else {
        // Not a number. Return "", an invalid ID.
        return "";
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
function getSportData(callback){
	db.collection('sports').find().toArray(function(err,items){
    if(err) callback(err);
    else callback(null, {sports: items});
   });
}

app.get('/sport/', function(req, res){
  getSportData(function(err, sports){
      if (err) {
        // A database error happened.
        // Internal Error: 500.
        res.status(500).send("Database error: " + err);
      } else if (sports === null) {
        // Couldn't find the feed in the database.
        res.status(400).send("Could not look up sports");
      } else {
        // Send data.
        res.send(sports);
      }
    });
});

function getTeamData(teamid, callback){
  db.collection('teams').findOne({
    _id: teamid
  }, function (err, teamData) {
    if (err) return callback(err);
    else if(teamData === null) {
      return callback(null, null);
    }
    callback(null, teamData)
  });
}

app.get('/team/:teamid', function(req, res){
  var teamId = req.params.teamid;
  getTeamData(new ObjectID(teamId), function(err, teamData) {
    if(err) {
      res.status(500).send("Database error: " + err);
    } else if (teamData === null) {
      res.status(400).send("Could not find Team " + teamId);
    } else {
      // Send data.
      res.send(teamData);
    }
  });
});

function getTeamArray(callback){
  db.collection('teams').find().toArray(function(err,items){
    if(err) callback(err);
    else callback(null, {teams: items});
}
);
}


app.get ('/team/', function(req, res){
  getTeamArray(function(err, teams){
      if (err) {
        // A database error happened.
        // Internal Error: 500.
        res.status(500).send("Database error: " + err);
      } else if (teams === null) {
        // Couldn't find the feed in the database.
        res.status(400).send("Could not look up teams");
      } else {
        // Send data.
        res.send(teams);
      }
    });
})

//Both User and Team Reviews
function postTeamReview(contents, stars, teamNumber, callback) {
      var starArr = [];
      for (var i=0; i<stars; i++) {
        starArr[i] = i;
      }
      var newReview = {
        "stars": starArr,
        "text": contents
      }
      db.collection('teams').updateOne({ _id: teamNumber },
      {
        $push: {reviews: newReview}
      }, function(err) {
        if(err) {
          return callback(err);
        }
        callback(null, newReview);
      });
  }

app.post('/teamReview', validate({ body: ReviewSchema }), function(req, res) {
  var body = req.body;
  postTeamReview(body.contents, body.stars, new ObjectID(body.id), function(err, teamData) {
    if(err) {
      res.status(500).send("Database error: " + err);
    } else if(teamData === null) {
      res.status(400).send("Could not look up team " + body.id);
    } else {
      res.send(teamData);
    }
  });
});

  function postUserReview(contents, stars, userid, callback) {
    var starArr = [];
    for (var i=0; i<stars; i++) {
      starArr[i] = i;
    }
      var newReview = {
        "stars": starArr,
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
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  if(fromUser === body.id){
    res.status(401).end();
  }
  else{
  postUserReview(body.contents, body.stars, new ObjectID(body.id), function(err, userData) {
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


function postChallenge(challenger, challengedate, challengetime, teamNumber, callback) {
  var newChallenge = {
    "challenger": challenger,
    "challengedate": challengedate,
    "challengetime": challengetime
  };
  db.collection('teams').updateOne({ _id: teamNumber },
  {
    $push: {Challenges: newChallenge}
  }, function(err){
    if(err) {
      return callback(err);
    }
    callback(null, newChallenge);
  });
}

app.post('/challenge', function(req, res) {
  var body = req.body;
  postChallenge(body.challenger,body.challengedate,body.challengetime,body.teamNumber, function(err, teamData) {
    if(err) {
      res.status(500).send("Database error: " + err);
    } else if (teamData === null) {
      res.status(400).send("could not look up team " + body.id);
    } else {
      res.send(teamData);
    }
  });
});

function postForumPost(author, contents, teamNumber, callback) {
  var newPost = {
    "author": author,
    "text": contents
  };
  db.collection('teams').updateOne({ _id: teamNumber},
  {
    $push: {posts: newPost}
  }, function(err) {
    if(err) {
      return callback(err)
    }
    callback(null, newPost);
  });
}

app.post('/forumPost', validate({ body: ForumPostSchema }), function(req, res) {
  var body = req.body;
  postForumPost(body.author, body.contents, body.teamNumber, function(err, teamData) {
    if(err) {
      res.status(500).send("Database error: " + err);
    } else if(teamData === null) {
      res.status(400).send("Could not look up team " + body.id);
    } else {
      res.send(teamData);
    }
  });
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
