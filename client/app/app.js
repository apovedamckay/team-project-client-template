import React from 'react';
import ReactDOM from 'react-dom';
import TeamPage from './components/teamPage';
import Navbar from './components/navbar';
import LeftSidebar from './components/LeftSidebar';
import Profile from './components/profile';
import { IndexRoute, Router, Route, hashHistory, Link } from 'react-router';
import SportsList from './components/sportsList';
import LogOut from './components/LogOut';
import BrowseTeam from './components/browseTeam';
import WelcomePage from './components/welcomePage';
import ErrorBanner from './components/errorbanner';


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

class Welcome extends React.Component {
  render() {
    return (
      <div>
      <WelcomePage />
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
        <Profile user = {"00000000000000000000000" + this.props.params.id} />
        </div>
        );
  }
}

class BrowseTeamPage extends React.Component {
  render() {
    return (
     <div>
    <Navbar />
    <LeftSidebar/>
     <BrowseTeam />
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
      <TeamPage team={this.props.params.id} />
      </div>
    )
  }
}


class App extends React.Component {
  render() {
    return (
      <div>
      <div className="col-md-12">
        <ErrorBanner />
        </div>
      {this.props.children}</div>
    )
  }
}


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome} />
      <Route path="profile/:id" component={ProfilePage} />
      <Route path="sports/" component={SportsPage} />
      <Route path="team/:id" component={Team} />
      <Route path="referee/" component={RefereePage} />
      <Route path="browse/" component={BrowseTeamPage} />
      <Route path="logout/" component={LogoutPage} />
      <Route path="Welcome/" component={Welcome} />
    </Route>
  </Router>
),document.getElementById('main-feed'));
