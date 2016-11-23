import React from 'react';
import {Link} from 'react-router';


export default class UserSummary extends React.Component {
  constructor(props) {
	super(props);
	this.state = props.data;
	}

  render()



  {
   return (
    <div className="col-md-3">
      <div className="panel panel-default">
        <div className="panel-body">
          <img src="img/person.jpg" width="100%"></img>
          <h2><p className="text-center">{this.state.first_name} {this.state.last_name}</p></h2>
          <h5><p className="text-center">@{this.state.username}</p></h5>
          <h6><p className="text-center">{this.state.email}</p></h6>
        </div>
      </div>
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="text-center">
            <h2>About Me</h2>
          </div>
            <hr></hr>
            {this.state.summary}
        </div>
      </div>
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="text-center">
            <h3>Teams I'm On:</h3>
                      </div>
            <hr></hr>
            {this.state.teamList.map(function(team){
              return <Link to={"/team/" + team._id}><li>{team.name}</li></Link>
            })}
        </div>
      </div>
    </div>
   )
  }

}
