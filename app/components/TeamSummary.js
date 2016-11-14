import React from 'react';


export default class TeamSummary extends React.Component {

  constructor(props) {
    super(props);
    this.state = props.data;
  }

  render() {
    return (
        <div className="col-md-7">
            <h1>{this.state.teamName}</h1>
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="col-md-2">
                        Sportsmanship:
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                    </div>
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-3">
                        {this.state.location}
                    </div>
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-3">
                      {this.state.reccord}
                    </div>
                </div>
            </div>
          </div>
        )
      }
}
