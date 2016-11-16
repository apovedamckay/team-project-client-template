import React from 'react';


export default class TeamDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.data;
  }

  render() {
    return (
      <div className="panel panel-default fb-status-update-entry">
          <div className="panel-body">
              <div className="row">
                  <div className="col-md-12">
                      {this.state.description}
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
