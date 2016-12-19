var ObjectID = require('mongodb').ObjectID;

// Put your startup's name here (only letters and numbers -- no spaces, apostrophes, or special characters!)
var databaseName = "MatchUp";
// Put the initial mock objects here.
var initialData = {
      "users": {
          "1": {
              "_id": new ObjectID("000000000000000000000001"),
              "first_name": "Ilan",
              "last_name": "Shenar",
              "username": "Sp0rtsG0d420",
              "profile_picture": "img/person.jpg",
              "player_review": [
                  {
                      "stars": [ 1, 2, 3, 4 ],
                      "text": "Respectful guy."
                  },
                  {
                      "stars": [1],
                      "text": "Great sportsman"
                  }
              ],
              "ref_review": [],
              "email": "coolguy@google.com",
              "referee": true,
              "player": true,
              "stars": [1,2,3,4],
              "location": "The Gym",
              "summary": "just a guy looking to ball",
              "teamList": [
              {
                  "name": "Team Awesome",
                  "_id": new ObjectID("000000000000000000000001")
              },
              {
                  "name": "Team Fun",
                  "_id": new ObjectID("000000000000000000000003")
              }
              ]
          },
          "2": {
            "_id":  new ObjectID("000000000000000000000002"),
              "first_name": "Jean",
              "last_name": "Webb",
              "username:": "mreasyclean5",
              "player_review": [
                {
                  "stars": [1,2],
                  "text": "did not like playing with him"
                },
                {
                  "stars": [ 1, 2, 3, 4 ],
                  "text": "Respectful guy."
                }
          ],
              "location": "The Gym",
              "ref_review": [],
              "email": "jwebb1@creativecommons.org",
              "referee": false,
              "summary": "just a cool gal looking to have some fun",
              "teamList": [
              {
                  "name": "Team Awesome",
                  "_id": new ObjectID("000000000000000000000001")
              }]
          },
          "3": {
            "_id":  new ObjectID("000000000000000000000003"),
            "first_name": "Max",
            "last_name": "Galat",
            "email": "g@u.com",
            "username:": "goodguymax",
            "player_review": [
              {
                "stars": [1,2,3,4],
                "text": "great guy"
              }
        ],
            "location": "Ilan Shenars Backyard",
            "ref_review": [],
            "referee": false,
            "summary": "just an under average dude",
            "teamList": [
              {
                  "name": "Team Awesome",
                  "_id": new ObjectID("000000000000000000000001")
              }]
          },
          "4": {
            "_id":  new ObjectID("000000000000000000000004"),
              "first_name": "Ernest",
              "last_name": "Brooks",
              "username:": "CoolRef",
              "player_review": [
                {
                  "stars": [1,2,3,4],
                  "text": "great guy"
                }
          ],
              "location": "The PokeCenter",
              "ref_review": [
                {
                  "stars": [1,2,3,4,5],
                  "text": "great ref"
            }],
              "email": "ernest@brooks.org",
              "referee": true,
              "summary": "just like to ref and watch ",
            "teamList": [
              {
                  "name": "Team Awesome",
                  "_id": new ObjectID("000000000000000000000001")
              }]
          },
          "5": {
            "_id":  new ObjectID("000000000000000000000005"),
              "first_name": "Virginia",
              "last_name": "Shaw",
              "username:": "vshaw",
              "player_review": [
                {
                  "stars": [1,2,3],
                  "text": "nice girl"
                }
          ],
              "location": "Needham, MA",
              "email": "vshaw@hotmail.com",
              "referee": false,
              "summary": "just a girl trying to have fun",
            "teamList": [
              {
                  "name": "Team Awesome",
                  "_id": new ObjectID("000000000000000000000001")
              }]        },
          "6": {
            "_id":  new ObjectID("000000000000000000000006"),
              "first_name": "Mark",
              "last_name": "Sanchez",
              "username:": "TheDirtySanchez",
              "player_review": [
                {
                  "stars": [1],
                  "text": "He butt fumbles a lot"
                }
          ],
              "location": "Met Life Stadium",
              "email": "TheDirtySanchez@nesn.org",
              "referee": false,
              "summary": "I like football",
              "teamList": ["Team Dope"]
          },
          "7": {
            "_id":  new ObjectID("000000000000000000000007"),
              "first_name": "Kimberly",
              "last_name": "Tucker",
              "username:": "KimTuck",
              "player_review": [
                {
                  "stars": [1,2,3,4,5],
                  "text": "What a player!"
                }
          ],
              "location": "The PokeCenter",
              "ref_review": [
                {
                  "stars": [1,2,3,4,5],
                  "text": "great ref"
            }],
              "email": "kim@tuck.org",
              "referee": true,
              "summary": "just like to ref and play ",
              "teamList": ["Team Dope"]
          },
          "8": {
            "_id":  new ObjectID("000000000000000000000008"),
              "first_name": "Kathy",
              "last_name": "Long",
              "username:": "katLong",
              "player_review": [
                {
              "text": "nice woman",
              "stars": [1,2,3,4]
            }
          ],
              "location": "My Backyard",
              "email": "katlong@umass.edu",
              "referee": false,
              "summary": "I like soccer a lot",
              "teamList": ["Team Dope"]
          },
          "9": {
            "_id":  new ObjectID("000000000000000000000009"),
              "first_name": "Katherine",
              "last_name": "Jones",
              "username:": "KatJones",
              "player_review": [
          ],
              "location": "Needham, MA",
              "email": "KatJones@gmail.com",
              "referee": false,
              "summary": "Just starting out. Looking for a team",
              "teamList": []
          },
          "10": {
            "_id":  new ObjectID("000000000000000000000010"),
              "first_name": "Teresa",
              "last_name": "Hughes",
              "username:": "Teresa11111",
              "player_review": [
                {
              "text": "What a player!",
              "stars": [1,2,3,4,5]
            }
          ],
              "location": "Golds Gym",
              "ref_review": [],
              "email": "teresa@hughes.org",
              "referee": true,
              "summary": "Just became a ref",
              "teamList": ["Team Dope"]
          }

      },

      "teams": {
          "1": {
            "_id":  new ObjectID("000000000000000000000001"),
              "summary": {
                  "teamName": "Team Awesome",
                  "stars": [
                      1, 2, 3, 4
                  ],
                  "location": "Amherst, MA",
                  "record": "51 wins, 22 losses"
              },
              "description": "We are the best team in the entire world",
              "reviews": [
                  {
                      "stars": [
                          1, 2
                      ],
                      "text": "This is not the best team in the world. They are liars."
                  }
              ],
              "list": [{
                  "name": "Max Galat",
                  "_id": new ObjectID("000000000000000000000003")
              },
              {
                  "name": "Ilan Shenar",
                  "_id": new ObjectID("000000000000000000000001")
              },
              {
                  "name": "Katherine Jones",
                  "_id": new ObjectID("000000000000000000000009")
              },
              {
                  "name": "Jean Webb",
                  "_id": new ObjectID("000000000000000000000002")
              }

              ],
              "Challenges": [
                {
                  "Challenger": 2,
                  "challengedate": "9/9",
                  "challengetime":"9AM"
                }
              ],
              "posts": [
                  {
                      "author": "Max Galat",
                      "text": "I wish I had more team members..."
                  },{
                    "author": "Max Galat",
                    "text": "I feel so lonely T_T"
                  }
              ]
          },

          "2": {
            "_id":  new ObjectID("000000000000000000000002"),
              "summary": {
                  "teamName": "Team Dope",
                  "stars": [
                      1, 2
                  ],
                  "location": "Needham, MA",
                  "record": "5 wins, 2 losses"
              },
              "description": "We are just people having fun",
              "reviews": [
                  {
                    "_id": new ObjectID("000000000000000000000001"),
                      "stars": [
                          1, 2
                      ],
                      "text": "Respectful team."
                  }
              ],
              "list": [{
                  "name": "Max Galat",
                  "_id": new ObjectID("000000000000000000000003")
              },
              {
                  "name": "Katherine Jones",
                  "_id": new ObjectID("000000000000000000000009")
              },
              {
                  "name": "Jean Webb",
                  "_id": new ObjectID("000000000000000000000002")
              }

              ],
              "Challenges": [
                {
                  "_id": new ObjectID("000000000000000000000001"),
                  "Challenger": "Team Awesome"
                }
              ],
              "posts": []
          },

          "3": {
            "_id":  new ObjectID("000000000000000000000003"),
              "summary": {
                  "teamName": "Team Fun",
                  "stars": [1],
                  "location": "Redding, MA",
                  "record": "1 wins, 2 losses"
              },
              "description": "We are a very solid team",
              "reviews": [
                  {
                    "_id": new ObjectID("000000000000000000000001"),
                      "stars": [1],
                      "text": "Bad sportsmanship."
                  },
                  {
                    "_id": new ObjectID("000000000000000000000002"),
                      "stars": [1,2],
                      "text": "Average sportsmanship."
                  }
              ],
              "list": [{
                  "name": "Max Galat",
                  "_id": new ObjectID("000000000000000000000003")
              },
              {
                  "name": "Ilan Shenar",
                  "_id": new ObjectID("000000000000000000000001")
              },
              {
                  "name": "Katherine Jones",
                  "_id": new ObjectID("000000000000000000000009")
              },
              {
                  "name": "Jean Webb",
                  "_id": new ObjectID("000000000000000000000002")
              }

              ],
              "Challenges": [],
              "posts": []
          }
        },

          "sports": {
              "1": {
                "_id":  new ObjectID("000000000000000000000001"),
                  "name": "Football",
                  "img": '../img/football.jpg',
                  "gameSize": ["2v2","3v3","4v4","5v5","6v6", "6+ Players"]
              },
              "2": {
                "_id":  new ObjectID("000000000000000000000002"),
                  "name": "Wiffle Ball",
                  "img": '../img/wiffle.jpg',
                  "gameSize": ["2v2","3v3","4v4","5v5","6v6", "6+ Players"]
              },
              "3": {
                "_id":  new ObjectID("000000000000000000000003"),
                  "name": "Tennis",
                  "img": '../img/tennis.jpg',
                  "gameSize":["1v1","2v2","2+ Players"]
              },
              "4": {
                "_id":  new ObjectID("000000000000000000000004"),
                  "name": "Basketball",
                  "img": '../img/Basketball.png',
                  "gameSize": ["1v1","2v2","3v3","4v4","5v5","5+ Players"]
              },
              "5": {
                "_id":  new ObjectID("000000000000000000000005"),
                  "name": "Volleyball",
                  "img": '../img/volley.jpg',
                  "gameSize": ["1v1","2v2","3v3","4v4","5v5","6v6", "6+ Players"]
              },
              "6": {
                "_id":  new ObjectID("000000000000000000000006"),
                  "name": "Soccer",
                  "img": '../img/ball-large.png',
                  "gameSize": ["2v2","3v3","4v4","5v5","6v6", "6+ Players"]
              },
              "7": {
                "_id":  new ObjectID("000000000000000000000007"),
                  "name": "Lacrosse",
                  "img": '../img/lax.png',
                  "gameSize": ["1v1","2v2","3v3","4v4","5v5","6v6", "6+ Players"]
              }
          }
};

/**
 * Resets a collection.
 */
function resetCollection(db, name, cb) {
  // Drop / delete the entire object collection.
  db.collection(name).drop(function() {
    // Get all of the mock objects for this object collection.
    var collection = initialData[name];
    var objects = Object.keys(collection).map(function(key) {
      return collection[key];
    });
    // Insert objects into the object collection.
    db.collection(name).insertMany(objects, cb);
  });
}

/**
 * Reset the MongoDB database.
 * @param db The database connection.
 */
function resetDatabase(db, cb) {
  // The code below is a bit complex, but it basically emulates a
  // "for" loop over asynchronous operations.
  var collections = Object.keys(initialData);
  var i = 0;

  // Processes the next collection in the collections array.
  // If we have finished processing all of the collections,
  // it triggers the callback.
  function processNextCollection() {
    if (i < collections.length) {
      var collection = collections[i];
      i++;
      // Use myself as a callback.
      resetCollection(db, collection, processNextCollection);
    } else {
      cb();
    }
  }

  // Start processing the first collection!
  processNextCollection();
}

// Check if called directly via 'node', or required() as a module.
// http://stackoverflow.com/a/6398335
if(require.main === module) {
  // Called directly, via 'node src/resetdatabase.js'.
  // Connect to the database, and reset it!
  var MongoClient = require('mongodb').MongoClient;
  var url = 'mongodb://localhost:27017/' + databaseName;
  MongoClient.connect(url, function(err, db) {
    if (err) {
      throw new Error("Could not connect to database: " + err);
    } else {
      console.log("Resetting database...");
      resetDatabase(db, function() {
        console.log("Database reset!");
        // Close the database connection so NodeJS closes.
        db.close();
      });
    }
  });
} else {
  // require()'d.  Export the function.
  module.exports = resetDatabase;
}
