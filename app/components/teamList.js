import React from 'react';


export default class TeamList extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.data;
  }

  render() {
    return (
      <div className="col-md-2 right-sidebar">
          <ul className="nav nav-pills nav-stacked">
              <li role="presentation">Team Members</li>
              {this.state.members.map((member) => {
                return (
                      <li role="presentation"><a href="#">{member.name}</a></li>
                    )
                  })
                }
          </ul>
      </div>
    )
  }
}