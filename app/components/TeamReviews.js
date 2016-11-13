import React from 'react';


export default class TeamSummary extends React.Component {
  render() {
    return (
      <div className="panel panel-default fb-status-update">
          <div className="panel-body">
              <div className="row">
                  <div className="col-md-12">
                      Sportsmanship:
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-12">
                      This team was awesome to play against! I loved them!
                  </div>
              </div>


          </div>
      </div>
    )
  }
}
