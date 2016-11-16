import React from 'react';
import ReactDOM from 'react-dom';
import TeamPage from './components/teamPage';
import Navbar from './components/navbar';
import LeftSidebar from './components/LeftSidebar';
import Profile from './components/profile';
import { IndexRoute, Router, Route, browserHistory, Link } from 'react-router';
import Schedule from './components/pageSchedule';
import SportsBox from './components/sportsBox';
import SportsList from './components/sportsList';


class SportsPage extends React.Component {
  render() {
    return (
      <div>
        <LeftSidebar/>
        <SportsList />
      </div>
    );
  }
}

class ProfilePage extends React.Component {
  render() {
    return (
      <p>This is the profile page for a user
        with ID {this.props.params.id}.</p>
        //<Profile user = {this.props.params.id} />
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
      <Navbar />
      {this.props.children}</div>
    )
  }
}


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
<<<<<<< HEAD
      <IndexRoute component={App} />
      <Route path="profile/" component={ProfilePage} />
=======
      <IndexRoute component={SportsPage} />
      <Route path="profile/:id" component={ProfilePage} />
>>>>>>> 32ce6dfe15e922ec0e0c3c42470f18f34adc09d3
      <Route path="sports/" component={SportsPage} />
      <Route path="team/" component={Team} />
      <Route path="referee/" component={RefereePage} />
      <Route path="schedule/" component={SchedulePage} />
      <Route path="search/" component={SearchTeamPage} />
    </Route>
  </Router>
),document.getElementById('main-feed'));
