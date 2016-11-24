import React from 'react';
import {Link} from 'react-router';

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
      <nav className="nb navbar-custom navbar-fixed-top">
        <div className="container">
        <form className="navbar-form navbar-left" role="search">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search MatchUp"></input>
            <span className="input-group-btn">
              <button type="submit" className="btn btn-default">
                <span className="glyphicon glyphicon-search"></span>
              </button>
            </span>
          </div>
        </form>
        <Link to={"/sports/"}>
        <button type="button" className="btn navbar-btn btn-default">
          Sports
        </button>
        </Link>
        <div className="btn-group" role="group">
          <a href="#" className="btn navbar-btn buttonfun navbar-center" role="button">MatchUp</a>
        </div>
        <ul className="navbar-form navbar-right">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle buttonfun" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <a href="#">
                <span className="glyphicon glyphicon-user"></span>
              </a>
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><Link to={"/profile/1"}>My Profile</Link></li>
              <li><Link to={"/team/1"}>Team 1</Link></li>
              <li><Link to={"/logout/"}>Log Out</Link></li>
            </div>
          </div>
        </ul>
      </div>
    </nav>
    </div>
    );
  }
}
