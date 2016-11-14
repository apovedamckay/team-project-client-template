import React from 'react';


export default class ProfileSummary extends React.Component {

  render(){
   return (
    <div className="col-md-3">
      <div className="panel panel-default">
        <div className="panel-body">
          <img src="img/person.jpg" width="100%"></img>
          <h3><p className="text-center">{this.props.user.fullName}</p></h3>
          <h4><p className="text-center">{this.props.user.email}</p></h4>
        </div>
      </div>
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="text-center">
            <h2>About Me</h2>
          </div>
            <hr>
            {this.props.children}
            </hr>
        </div>
      </div>
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="text-center">
            <h2>Current Teams</h2>
          </div>
          <hr>
            <ul className="media-list">
              {React.Children.map(this.props.children, function(child) {
                return (
                  <li className="media">
                    {child}
                  </li>
                )
              })}
            </ul>
          </hr>
        </div>
      </div>
    </div>
   )
  }

}