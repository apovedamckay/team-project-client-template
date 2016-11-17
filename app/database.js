import React from 'react';
import ReactDOM from 'react-dom';

// Modify with your startup's name!
var startupName = "MatchUp";

// Put your mock objects here, as in Workshop 4
var initialData = {

    "users": {
        "1": {
            "_id": 1,
            "first_name": "Ilan",
            "last_name": "Shenar",
            "username": "Sp0rtsG0d420",
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
            "teamList": ["Team Awesome", "Dem Boyz"]
        },
        "2": {
          "_id": 2,
            "first_name": "Jean",
            "last_name": "Webb",
            "username:": "mreasyclean5",
            "player_review": [
              {
            "text": "did not like playing with him"
            "stars": [1,2],
          }
        ],
            "location": "The Gym",
            "ref_review": [],
            "email": "jwebb1@creativecommons.org",
            "referee": false,
            "summary": "just a cool gal looking to have some fun",
            "teamList": ["Team Awesome"]
        },
        "3": {
          "first_name": "Tim",
          "last_name": "Smith",
          "username:": "goodguytim",
          "player_review": [
            {
          "text": "great guy"
          "stars": [1,2,3,4],
        }
      ],
          "location": "Ilan Shenars Backyard",
          "ref_review": [],
          "email": "timothy@creativecommons.org",
          "referee": false,
          "summary": "just an under average dude",
          "teamList": ["Team Awesome"]
        },
        "4": {
          "_id": 4,
            "first_name": "Ernest",
            "last_name": "Brooks",
            "username:": "CoolRef",
            "player_review": [
              {
            "text": "great guy"
            "stars": [1,2,3,4],
          }
        ],
            "location": "The PokeCenter",
            "ref_review": [
              {
            "text": "great ref"
            "stars": [1,2,3,4,5],
          }],
            "email": "ernest@brooks.org",
            "referee": true,
            "summary": "just like to ref and watch ",
            "teamList": []
        },
        "5": {
          "_id": 5,
            "first_name": "Virginia",
            "last_name": "Shaw",
            "username:": "vshaw",
            "player_review": [
              {
            "text": "nice girl"
            "stars": [1,2,3],
          }
        ],
            "location": "Needham, MA",
            "email": "vshaw@hotmail.com",
            "referee": false,
            "summary": "just a girl trying to have fun",
            "teamList": ["Team Awesome"]
        },
        "6": {
          "_id": 6,
            "first_name": "Mark",
            "last_name": "Sanchez",
            "username:": "TheDirtySanchez",
            "player_review": [
              {
            "text": "He butt fumbles a lot"
            "stars": [1],
          }
        ],
            "location": "Met Life Stadium",
            "email": "TheDirtySanchez@nesn.org",
            "referee": false,
            "summary": "I like football",
            "teamList": ["Team Dope"]
        },
        "7": {
          "_id": 7,
            "first_name": "Kimberly",
            "last_name": "Tucker",
            "username:": "KimTuck",
            "player_review": [
              {
            "text": "What a player!"
            "stars": [1,2,3,4,5],
          }
        ],
            "location": "The PokeCenter",
            "ref_review": [
              {
            "text": "great ref"
            "stars": [1,2,3,4,5],
          }],
            "email": "kim@tuck.org",
            "referee": true,
            "summary": "just like to ref and play ",
            "teamList": ["Team Dope"]
        },
        "8": {
          "_id": 8,
            "first_name": "Kathy",
            "last_name": "Long",
            "username:": "katLong",
            "player_review": [
              {
            "text": "nice woman"
            "stars": [1,2,3,4],
          }
        ],
            "location": "My Backyard",
            "email": "katlong@umass.edu",
            "referee": false,
            "summary": "I like soccer a lot",
            "teamList": ["Team Dope"]
        },
        "9": {
          "_id": 9,
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
          "_id": 10,
            "first_name": "Teresa",
            "last_name": "Hughes",
            "username:": "Teresa11111",
            "player_review": [
              {
            "text": "What a player!"
            "stars": [1,2,3,4,5],
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
          "_id": 1,
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
            "list": ["Max Galat"],
            "Challenges": [
              {
                "_id": 1,
                "Challenger": "Team Dope"
              }
            ]
        },

        "2": {
          "_id": 2,
            "summary": {
                "name": "Team Dope",
                "stars": [
                    1, 2
                ],
                "location": "Needham, MA",
                "record": "5 wins, 2 losses"
            },
            "description": "We are just people having fun",
            "reviews": [
                {
                  "_id": 1,
                    "stars": [
                        1, 2
                    ],
                    "text": "Respectful team."
                }
            ],
            "list": [],
            "Challenges": [
              {
                "_id": 1,
                "Challenger": "Team Awesome"
              }
            ]
        },

        "3": {
          "_id": 3,
            "summary": {
                "name": "Team Fun",
                "stars": [1],
                "location": "Redding, MA",
                "record": "1 wins, 2 losses"
            },
            "description": "We are a very solid team",
            "reviews": [
                {
                  "_id": 1,
                    "stars": [1],
                    "text": "Bad sportsmanship."
                },
                {
                  "_id": 2,
                    "stars": [1,2],
                    "text": "Average sportsmanship."
                }
            ],
            "list": [],
            "Challenges": []
        }
    },

    "sports": {
        "1": {
          "_id": 1,
            "name": "Football",
            "img": '../img/football.jpg'
        },
        "2": {
          "_id": 2,
            "name": "Wiffle Ball",
            "img": '../img/wiffle.jpg'
        },
        "3": {
          "_id": 3,
            "name": "Tennis",
            "img": '../img/tennis.jpg'
        },
        "4": {
          "_id": 4,
            "name": "Basketball",
            "img": '../img/Basketball.png'
        },
        "5": {
          "_id": 5,
            "name": "Volleyball",
            "img": '../img/volley.jpg'
        },
        "6": {
          "_id": 6,
            "name": "Soccer",
            "img": '../img/ball-large.png'
        },
        "7": {
          "_id": 7,
            "name": "Lacrosse",
            "img": '../img/lax.png'
        }
    }
};

var data = JSON.parse(localStorage.getItem(startupName));
if (data === null) {
    data = JSONClone(initialData);
}

/**
* A dumb cloning routing. Serializes a JSON object as a string, then
* deserializes it.
*/
function JSONClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
* Emulates reading a "document" from a NoSQL database.
* Doesn't do any tricky document joins, as we will cover that in the latter
* half of the course. :)
*/
export function readDocument(collection, id) {
    // Clone the data. We do this to model a database, where you receive a
    // *copy* of an object and not the object itself.
    return JSONClone(data[collection][id]);
}

/**
* Emulates writing a "document" to a NoSQL database.
*/
export function writeDocument(collection, changedDocument) {
    var id = changedDocument._id;
    // Store a copy of the object into the database. Models a database's behavior.
    data[collection][id] = JSONClone(changedDocument);
    // Update our 'database'.
    localStorage.setItem(startupName, JSON.stringify(data));
}

/**
* Adds a new document to the NoSQL database.
*/
export function addDocument(collectionName, newDoc) {
    var collection = data[collectionName];
    var nextId = Object.keys(collection).length;
    while (collection[nextId]) {
        nextId++;
    }
    newDoc._id = nextId;
    writeDocument(collectionName, newDoc);
    return newDoc;
}

/**
* Reset our browser-local database.
*/
export function resetDatabase() {
    localStorage.setItem(startupName, JSON.stringify(initialData));
    data = JSONClone(initialData);
}

/**
* Reset database button.
*/
class ResetDatabase extends React.Component {
    render() {
        return (
            <button className="btn btn-default" type="button" onClick={() => {
                resetDatabase();
                window.alert("Database reset! Refreshing the page now...");
                document.location.reload(false);
            }}>Reset Mock DB</button>
        );
    }
}

ReactDOM.render(
    <ResetDatabase/>, document.getElementById('db-reset'));
