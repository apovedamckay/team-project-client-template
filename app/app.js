import React from 'react';
import ReactDOM from 'react-dom';
import TeamPage from './components/teamPage';
import Navbar from './components/navbar';
import LeftSidebar from './components/LeftSidebar';
import Profile from './components/profile';
import { IndexRoute, Router, Route, browserHistory, Link } from 'react-router';
import SportsList from './components/sportsList';
import LogOut from './components/LogOut';
import SearchTeam from './components/searchTeam';


class SportsPage extends React.Component {
  render() {
    return (
      <div>
      <Navbar />
        <LeftSidebar/>
        <SportsList />
      </div>
    );
  }
}

class LogoutPage extends React.Component {
  render() {
    return (
    <LogOut />
    );
  }
}

class ProfilePage extends React.Component {
  render() {
    return (
    <div>
    <Navbar />
        <Profile user = {1} />
        </div>
        );
  }
}

class SearchTeamPage extends React.Component {
  render() {
    return (
     <div>
    <Navbar />
    <LeftSidebar/>
     <SearchTeam />
     </div>
    );
  }
}

class RefereePage extends React.Component {
  render() {
    return (
      <p>This is the Referee page!</p>
    );
  }
}

class Team extends React.Component {
  render() {
    return(
      <div>
      <Navbar />
      <TeamPage team={1} />
      </div>
    )
  }
}


class App extends React.Component {
  render() {
    return (
      <div>
      {this.props.children}</div>
    )
  }
}


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ProfilePage} />
      <Route path="profile/:id" component={ProfilePage} />
      <Route path="sports/" component={SportsPage} />
      <Route path="team/" component={Team} />
      <Route path="referee/" component={RefereePage} />
      <Route path="search/" component={SearchTeamPage} />
      <Route path="logout/" component={LogoutPage} />
    </Route>
  </Router>
),document.getElementById('main-feed'));
