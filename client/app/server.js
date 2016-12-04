import {readDocument , writeDocument, addDocument} from './database.js';


function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}

//token for id:1
var token = 'eyJpZCI6MX0=';
//users one through 5
var userTokens = ['eyJpZCI6MX0=', 'eyJpZCI6Mn0=', 'eyJpZCI6M30=', 'eyJpZCI6NH0=', 'eyJpZCI6NX0=']

function sendXHR(verb, resource, body, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(verb, resource);
  xhr.setRequestHeader('Authorization', 'Bearer ' + token);
  // The below comment tells ESLint that AppError is a global.
  // Otherwise, ESLint would complain about it! (See what happens in Atom if
  // you remove the comment...)
  // global AppError //
  // Response received from server. It could be a failure, though!
  xhr.addEventListener('load', function() {
    var statusCode = xhr.status;
    var statusText = xhr.statusText;
    if (statusCode >= 200 && statusCode < 300) {
      // Success: Status code is in the [200, 300) range.
      // Call the callback with the final XHR object.
      cb(xhr);
    } else {
      // Client or server error.
      // The server may have included some response text with details concerning
      // the error.
      var responseText = xhr.responseText;
      window.AppError('Could not ' + verb + " " + resource + ": Received " +
      statusCode + " " + statusText + ": " + responseText);
    }
  });
  // Time out the request if it takes longer than 10,000
  // milliseconds (10 seconds)
  xhr.timeout = 10000;
  // Network failure: Could not connect to server.
  xhr.addEventListener('error', function() {
    window.AppError('Could not ' + verb + " " + resource +
    ": Could not connect to the server.");
  });
  // Network failure: request took too long to complete.
  xhr.addEventListener('timeout', function() {
    window.AppError('Could not ' + verb + " " + resource +
    ": Request timed out.");
  });
  switch (typeof(body)) {
    case 'undefined':
      // No body to send.
      xhr.send();
    break;
      case 'string':
      // Tell the server we are sending text.
      xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      xhr.send(body);
    break;
      case 'object':
      // Tell the server we are sending JSON.
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      // Convert body into a JSON string.
      xhr.send(JSON.stringify(body));
    break;
      default:
      throw new Error('Unknown body type: ' + typeof(body));
  }
}

export function postTeamReview(contents, teamNumber, cb) {
  sendXHR('POST', '/teamReview', {
    contents: contents,
    teamNumber: teamNumber
  }, (xhr) => {
    // Return the new status update.
  cb(JSON.parse(xhr.responseText));
});
}

export function postUserReview(contents, userID, cb) {
  var user = readDocument('users', userID);

  user.player_review.push({
    "stars": [
        1, 2
    ],
    "text": contents
  });

  writeDocument('users', user);
  emulateServerReturn(user, cb);
}

export function postProPic(img, userID, cb) {
  var user = readDocument('users', userID);

  user.profile_picture.push(img);

  writeDocument('users', user);
  // Return a resolved version of the feed item so React can
  // render it.
  emulateServerReturn(user, cb);
}


  export function submitChallenge(challenger,challengedate,challengetime, teamNumber, cb) {
    sendXHR('POST', 'challenge', {
      challenger: challenger,
      challengedate: challengedate,
      challengetime: challengetime,
      teamNumber: teamNumber
    }, (xhr) => {
      cb(JSON.parse(xhr.responseText));
    });
    }

export function getTeamData(id) {
    sendXHR('GET', '/team/' + id, undefined, (xhr) => {
      // Call the callback with the data.
      cb(JSON.parse(xhr.responseText));
    });
}

export function getUserData(user,cb){
  sendXHR('GET','/user/'+ user + '/profile/', undefined,(xhr)=>{
    cb(JSON.parse(xhr.responseText));
  })
}


export function getTeamArray(id, cb){
  sendXHR('GET','/team/', undefined,(xhr)=>{
    cb(JSON.parse(xhr.responseText));
  })
}


export function getSportData(id, cb){
  sendXHR('GET','/sport/', undefined,(xhr)=>{
    cb(JSON.parse(xhr.responseText));
  })
}

export function postForumPost(author, contents, teamNumber, cb) {
  sendXHR('POST', '/forumPost', {
    author: author,
    contents: contents,
    teamNumber: teamNumber
  }, (xhr) => {
    // Return the new status update.
  cb(JSON.parse(xhr.responseText));
});
}
