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
          <ul className="list-group">
              <h5 role="presentation">Team Members</h5>
              {this.state.list.map((member) => {
                return (
                <Link to={"/profile/" + member._id}> 
                      <li className="list-group-item">{member.name}</li>
                 </Link>
                    )
                  })
                }
          </ul>
      </div>
    )
  }
}
