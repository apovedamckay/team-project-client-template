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
                    "stars": [
                        1, 2
                    ],
                    "text": "Respectful guy."
                }
            ],
            "ref_review": [],
            "email": "coolguy@google.com",
            "referee": true,
            "player": true,
            "stars": [1,2,3,4,5,6,7,8,9,10],
            "location": "The Gym",
            "summary": "just a guy looking to ball",
            "teamList": ["Team Awesome", "Dem Boyz"]
        },
        "2": {
          "_id": 2,
            "first_name": "Jean",
            "last_name": "Webb",
            "username:": "mreasyclean5",
            "stars": [1,2,3,4,5,6,7,8,9,10],
            "location": "The Gym",
            "player_review": [],
            "ref_review": [],
            "email": "jwebb1@creativecommons.org",
            "referee": false,
            "summary": "just a guy looking to ball",
            "teamList": ["Team Awesome", "Dem Boyz"]
        },
        "3": {
          "_id": 3,
            "first_name": "Roger",
            "last_name": "Hayes",
            "player_review": [],
            "ref_review": [],
            "email": "rhayes2@php.net",
            "referee": true
        },
        "4": {
          "_id": 4,
            "first_name": "Ernest",
            "last_name": "Brooks",
            "player_review": [],
            "ref_review": [],
            "email": "ebrooks3@shareasale.com",
            "referee": true
        },
        "5": {
          "_id": 5,
            "first_name": "Virginia",
            "last_name": "Shaw",
            "player_review": [],
            "ref_review": [],
            "email": "vshaw4@slate.com",
            "referee": false
        },
        "6": {
          "_id": 6,
            "first_name": "Ryan",
            "last_name": "Sanchez",
            "player_review": [],
            "ref_review": [],
            "email": "rsanchez5@vistaprint.com",
            "referee": true
        },
        "7": {
          "_id": 7,
            "first_name": "Kimberly",
            "last_name": "Tucker",
            "player_review": [],
            "ref_review": [],
            "email": "ktucker6@yahoo.com",
            "referee": true
        },
        "8": {
          "_id": 8,
            "first_name": "Kathy",
            "last_name": "Long",
            "player_review": [],
            "ref_review": [],
            "email": "klong7@ezinearticles.com",
            "referee": true
        },
        "9": {
          "_id": 9,
            "first_name": "Katherine",
            "last_name": "Jones",
            "player_review": [],
            "ref_review": [],
            "email": "kjones8@admin.ch",
            "referee": true
        },
        "10": {
          "_id": 10,
            "first_name": "Teresa",
            "last_name": "Hughes",
            "player_review": [],
            "ref_review": [],
            "email": "thughes9@ehow.com",
            "referee": true
        },
        "11": {
          "_id": 11,
            "first_name": "Larry",
            "last_name": "Fox",
            "player_review": [],
            "ref_review": [],
            "email": "lfoxa@nps.gov",
            "referee": false
        },
        "12": {
          "_id": 12,
            "first_name": "Evelyn",
            "last_name": "Hawkins",
            "player_review": [],
            "ref_review": [],
            "email": "ehawkinsb@theglobeandmail.com",
            "referee": false
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
