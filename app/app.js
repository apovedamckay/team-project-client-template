import React from 'react';
import ReactDOM from 'react-dom';
import TeamPage from './components/teamPage';
import Navbar from './components/navbar';
import LeftSidebar from './components/LeftSidebar';
import { IndexRoute, Router, Route, browserHistory, Link } from 'react-router';


class SportsPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <LeftSidebar/>
        <Link to={"/team/"}>Team</Link>
        <p>This is the sports page!</p>
      </div>
    );
  }
}

class ProfilePage extends React.Component {
  render() {
    return (
      <p>This is the Profile page!</p>
    );
  }
}

class SchedulePage extends React.Component {
  render() {
    return (
      <p>This is the Schedule page!</p>
    );
  }
}

class SearchTeamPage extends React.Component {
  render() {
    return (
     <div><LeftSidebar/>
      <p>This is the search page!</p>
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
    return <TeamPage team={1} />
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
      <IndexRoute component={SportsPage} />
      <Route path="profile/" component={ProfilePage} />
      <Route path="sports/" component={SportsPage} />
      <Route path="team/" component={Team} />
      <Route path="referee/" component={RefereePage} />
      <Route path="schedule/" component={SchedulePage} />
      <Route path="search/" component={SearchTeamPage} />
    </Route>
  </Router>
),document.getElementById('main-feed'));
