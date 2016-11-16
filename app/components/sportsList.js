import React from 'react';
import SportsBox from './sportsBox';

export default class SportsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sports: ["Basketball, Soccer"]
    };
  }

	render() {
		return (
      <div>
      <h1>SportsList</h1>
      {this.state.sports.map(function(sport) {
        return <li><SportsBox name = {sport} /></li>
      })};

      </div>
    );
	}
}