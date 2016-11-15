import React from 'react';
//import {Link} from 'react-router';

export default class LeftSidebar extends React.Component {
  render() {
    return (
    <div className="col-md-2" id="left-sidebar">
      <div className= "panel panel-default side-profile">
        <div className="panel-body">
          <img src="img/person.jpg" width="100%"></img>
          <h3><p className="text-center">Full Name</p></h3>
          <h4><p className="text-center">@Username</p></h4>
          <hr></hr>
          <a href="profile.html"><p className="text-center"> Profile</p> </a>
          <br></br>
          <a href="Teampage.html"><p className="text-center"> Teams</p> </a>
        </div>
      </div>
    </div>
		)
	}
}