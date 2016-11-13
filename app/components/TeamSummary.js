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
            <div className="panel panel-default fb-status-update-entry">
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-12">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </div>
            </div>
          </div>
        )
      }
}
