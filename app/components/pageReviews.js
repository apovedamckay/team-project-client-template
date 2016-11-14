import React from 'react';


export default class Review extends React.Component {

  constructor(props) {
    super(props);
    this.state = props.data;
  }

  render() {
    return (
      <div className="panel panel-default fb-status-update">
          <div className="panel-body">
              <div className="row">
                  <div className="col-md-12">
                      Sportsmanship:
                      {this.state.stars.map((star) => {
                        return (
                              <span className="glyphicon glyphicon-star"></span>
                            )
                        })
                      }
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-12">
                      {this.state.text}
                  </div>
              </div>


          </div>
      </div>
    )
  }
}
