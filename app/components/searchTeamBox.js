import React from 'react';


export default class SearchTeamBox extends React.Component {
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
            <h1><p className="text-center">{this.state.summary.teamName}</p></h1>
            <hr></hr>
          </div>
          </div>
          </div>
          </div>
    );
  }
}
