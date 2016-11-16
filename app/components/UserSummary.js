import React from 'react';


export default class UserSummary extends React.Component {
  constructor(props) {
	super(props);
	this.state = props.data;
	}

  render(){
   return (
    <div className="col-md-3">
      <div className="panel panel-default">
        <div className="panel-body">
          <img src="img/person.jpg" width="100%"></img>
          {console.log(this.state)}
          <h3><p className="text-center">{this.state.first_name} {this.state.last_name}</p></h3>
          <h4><p className="text-center">"Shenar"</p></h4>
        </div>
      </div>
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="text-center">
            <h2>About Me</h2>
          </div>
            <hr>
            {this.props.children}
            </hr>
        </div>
      </div>
    </div>
   )
  }

}
