import {readDocument, writeDocument, addDocument} from './database.js';

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}

export function getTeamData(id, cb) {
    var teamData = readDocument('teams', id);
    emulateServerReturn(teamData, cb);
}

export function getUserData(user, cb){
	var userData = readDocument('users', user);
	emulateServerReturn(userData, cb);
}