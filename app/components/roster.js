import React from 'react';


export default class Roster extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.data;
  }

  render() {
    return (
      <div className="col-md-2 right-sidebar">
          <ul className="nav nav-pills nav-stacked">
              <li role="presentation">Team Members</li>
              {this.state.members.map((team) => {
                return (
                      <li role="presentation"><a href="#">{team.name}</a></li>
                    )
                  })
                }
          </ul>
      </div>
    )
  }
}
