import React from 'react';
import ReactDOM from 'react-dom';

// Modify with your startup's name!
var startupName = "MatchUp";

// Put your mock objects here, as in Workshop 4
var initialData = {

  "users" : {
    "1":{"first_name":"Dennis", "last_name":"Myers","email":"dmyers0@moonfruit.com","referee":false},
    "2":{"first_name":"Jean","last_name":"Webb","email":"jwebb1@creativecommons.org","referee":false},
    "3":{"first_name":"Roger","last_name":"Hayes","email":"rhayes2@php.net","referee":true},
    "4":{"first_name":"Ernest","last_name":"Brooks","email":"ebrooks3@shareasale.com","referee":true},
    "5":{"first_name":"Virginia","last_name":"Shaw","email":"vshaw4@slate.com","referee":false},
    "6":{"first_name":"Ryan","last_name":"Sanchez","email":"rsanchez5@vistaprint.com","referee":true},
    "7":{"first_name":"Kimberly","last_name":"Tucker","email":"ktucker6@yahoo.com","referee":true},
    "8":{"first_name":"Kathy","last_name":"Long","email":"klong7@ezinearticles.com","referee":true},
    "9":{"first_name":"Katherine","last_name":"Jones","email":"kjones8@admin.ch","referee":true},
    "10":{"first_name":"Teresa","last_name":"Hughes","email":"thughes9@ehow.com","referee":true},
    "11":{"first_name":"Larry","last_name":"Fox","email":"lfoxa@nps.gov","referee":false},
    "12":{"first_name":"Evelyn","last_name":"Hawkins","email":"ehawkinsb@theglobeandmail.com","referee":false}

  },

  "teams" : {
    "1": {
      "summary": {
        "teamName": "Team Awesome",
        "stars": [1,2,3,4],
        "location": "Amherst, MA",
        "record": "51 wins, 22 losses"
      },
      "description": "We are the best team in the entire world",
      "reviews": [
        {
          "_id": 1,
          "stars": [1,2],
          "text": "This is not the best team in the world. They are liars."
        }
      ],
      "list": ["Max Galat"]
    },

    "2": {
      "summary": {
        "name": "Team Dope",
        "stars": [1,2],
        "location": "Needham, MA",
        "record": "5 wins, 2 losses"
      },
      "description": "We are just people having fun",
      "reviews": [
        {
          "stars": [1,2],
          "text": "Respectful team."
        }
      ]
    },

    "3": {
      "summary": {
        "name": "Team Fun",
        "stars": [1],
        "location": "Redding, MA",
        "record": "1 wins, 2 losses"
      },
      "description": "We are a very solid team",
      "reviews": [
        {
          "stars": [1],
          "text": "Bad sportsmanship."
        }
      ]
    }
  },

  "sports" : {
    "1": {
      "name": "football"
    },
    "2": {
      "name": "wiffle ball"
    },
    "3": {
      "name": "tennis"
    },
    "4": {
      "name": "basketball"
    },
    "5": {
      "name": "volleyball"
    },
    "6": {
      "name": "soccer"
    },
    "7": {
      "name": "lacrosse"
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
  <ResetDatabase />,
  document.getElementById('db-reset')
);
