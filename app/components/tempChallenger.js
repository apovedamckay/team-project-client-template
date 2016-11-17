import React from 'react';


export default class TempChallenger extends React.Component {

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
                      Challenged by: {this.state.Challenger} !
                  </div>
              </div>


          </div>
      </div>
    )
  }
}
