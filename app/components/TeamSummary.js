import React from 'react';


export default class TeamSummary extends React.Component {
  render() {
    return (

        <div className="col-md-7">
            <h1>Team Awesome</h1>
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
                        Amherst, MA
                    </div>
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-3">
                        5 wins, 7 losses
                    </div>
                </div>
            </div>
          </div>
        )
      }
}
