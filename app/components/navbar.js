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
            <input type="text" className="form-control" placeholder="Search MatchUp">
            <span className="input-group-btn">
              <button type="submit" className="btn btn-default">
                <span className="glyphicon glyphicon-search"></span>
              </button>
            </span>
            </input>
          </div>
        </form>
        <Link to={"/sports"}>
          Sports
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
              <a className="dropdown-item">My Profile</a><br></br>
              <a className="dropdown-item">Team 1</a><br></br>
              <a className="dropdown-item">Log Out :(</a>
            </div>
          </div>
        </ul>
      </div>
    </nav>
    </div>
    );
  }
}