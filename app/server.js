import {readDocument , writeDocument, addDocument} from './database.js';

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}


export function postReview(contents, teamNumber, cb) {
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
  emulateServerReturn(team, cb);
}

export function postProPic(img, userID, cb) {
  var user = readDocument('users', userID);

  user.profile_picture.push(img);

  writeDocument('users', user);
  // Return a resolved version of the feed item so React can
  // render it.
  emulateServerReturn(user, cb);
}


  export function submitChallenge(contents, teamNumber, cb) {
    var team = readDocument('teams', teamNumber);

    team.Challenges.push({
      "Challenger": contents
    });
      writeDocument('teams', team);
      // Return a resolved version of the feed item so React can
      // render it.
      emulateServerReturn(team, cb);
    }

export function getTeamData(id, cb) {
    var teamData = readDocument('teams', id);
    emulateServerReturn(teamData, cb);
}

export function getUserData(user, cb){
	var userData = readDocument('users', user);
	emulateServerReturn(userData, cb);
}

export function getTeamArray(id, cb){
  var teamArray = [];
  for(var i = 1; i < 4; i++){
    teamArray[i-1] = readDocument('teams', i);
  }
  emulateServerReturn({teams: teamArray}, cb);
}

export function getSportData(id, cb){
	var sportsArray = [];
	for(var i = 1; i < 8; i++){
		sportsArray[i-1] = readDocument("sports", i);
	}
	emulateServerReturn({sports: sportsArray}, cb);
}

export function postForumPost(author, contents, teamNumber, cb) {
  var team = readDocument('teams', teamNumber);
  team.posts.push({
    "author": author,
    "text": contents
  });
  writeDocument('teams', team);
  emulateServerReturn(team, cb);
}
