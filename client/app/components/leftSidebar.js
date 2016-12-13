import React from 'react';
import {Link} from 'react-router';

export default class LeftSidebar extends React.Component {
  render() {
    return (
    <div className="col-md-2" id="left-sidebar">
      <div className= "panel panel-default side-profile">
        <div className="panel-body">
          <img src="../img/person.jpg" width="100%"></img>
          <h3><p className="text-center">Ilan Shenar</p></h3>
          <h12><p className="text-center">@Sp0rtsG0d420</p></h12>
          <hr></hr>
          <Link to="/profile/1"><p className="text-center"> Profile</p></Link>
        </div>
      </div>
    </div>
		)
	}
}
