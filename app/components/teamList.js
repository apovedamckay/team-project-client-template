import React from 'react';


export default class TeamList extends React.Component {
  render() {
    return (
      <div className="col-md-2 right-sidebar">
          <ul className="nav nav-pills nav-stacked">
              <li role="presentation">Team Members</li>
              <li role="presentation"><a href="#">Adrian Poveda McKay</a></li>
              <li role="presentation"><a href="profile.html">Andrew Caccavaro</a></li>
              <li role="presentation"><a href="profile.html">Ilan Shenar</a></li>
              <li role="presentation"><a href="profile.html">Kimberly Smith</a></li>
              <li role="presentation"><a href="profile.html">Max Galat</a></li>
              <li role="presentation"><a href="profile.html">Nicholas Hower</a></li>
          </ul>
      </div>
    )
  }
}
