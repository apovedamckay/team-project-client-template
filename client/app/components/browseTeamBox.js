import React from 'react';
import {Link} from 'react-router';


export default class BrowseTeamBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.data;
  }
  render() {
    return (
      <div className="col-md-8">
				<div className= "panel panel-default">
                  <div className="panel-body">
          <div className="row">
          <Link to={"/team/" + this.state._id}>
            <h1><p className="text-center">{this.state.summary.teamName}</p></h1>
            </Link>
          </div>
          </div>
          </div>
          </div>
    );
  }
}
