import React from 'react';
export default class ForumPost extends React.Component {
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
              Posted by: {this.state.author}
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
