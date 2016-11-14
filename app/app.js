import React from 'react';
import ReactDOM from 'react-dom';
import TeamPage from './components/teamPage';
import { IndexRoute, Router, Route, browserHistory } from 'react-router'


class SportsPage extends React.Component {
  render() {
    return (
      <p>This is the sports page!</p>
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
      <p>This is the search page!</p>
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
    return <TeamPage team={1} />;
  }
}


class App extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {/* Show the Feed at / */}
      <IndexRoute component={Team} />
      <Route path="profile/" component={ProfilePage} />
      <Route path="sports/" component={SportsPage} />
      <Route path="team/" component={TeamPage} />
      <Route path="referee/" component={RefereePage} />
      <Route path="schedule/" component={SchedulePage} />
      <Route path="search/" component={SearchTeamPage} />
    </Route>
  </Router>
),document.getElementById('main-feed'));
