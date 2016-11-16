import React from 'react';


export default class TeamSummary extends React.Component {

  constructor(props) {
    super(props);
    this.state = props.data;
  }

  render() {
    return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="col-md-2">
                        Sportsmanship:
                        {this.state.stars.map((star, i) => {
                          return (
                                <span key={i} className="glyphicon glyphicon-star"></span>
                              )
                          })
                        }
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
        )
      }
}
