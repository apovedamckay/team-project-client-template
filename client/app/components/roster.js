import React from 'react';
import {Link} from 'react-router';


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
              {this.state.list.map((member) => {
                return (
                <Link to={"/profile/" + member._id}> 
                      <li>{member.name}</li>
                 </Link>
                    )
                  })
                }
          </ul>
      </div>
    )
  }
}
