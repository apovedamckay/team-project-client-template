import React from 'react';
import ReactDOM from 'react-dom';
import Feed from './components/feed';
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

class TeamPage extends React.Component {
  render() {
    return (
      <p>This is the home page!</p>
    );
  }
}

/**
 * The Feed page. We created a new component just
 * to fix the userId at 4.
 */
class HomePage extends React.Component {
  render() {
    return <Feed user={4} />;
  }
}
/**
 * The primary component in our application.
 * The Router will give it different child Components
 * as the user clicks around the application.
 *
 * If we implemented all of Facebook, this App would
 * also contain Component objects for the left and
  * right content panes.
 */
class App extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    )
} }


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {/* Show the Feed at / */}
      <IndexRoute component={HomePage} />
      <Route path="profile/:id" component={ProfilePage} />
      <Route path="sports/" component={SportsPage} />
      <Route path="team/:id" component={TeamPage} />
      <Route path="referee/:id" component={RefereePage} />
      <Route path="schedule/:id" component={SchedulePage} />
      <Route path="search/:query" component={SearchTeamPage} />
    </Route>
  </Router>
),document.getElementById('main-feed'));
