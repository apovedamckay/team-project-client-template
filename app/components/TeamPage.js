import React from 'react';
import Review from './pageReview';
import TeamSummary from './teamSummary';
import Roster from './roster';
import {getTeamData} from '../server';


export default class TeamPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
    };
  }

  refresh() {
    getTeamData(this.props.team, (teamData) => {
      this.setState(teamData);
    });
  }

render() {
  return (
    <div>
      <TeamSummary data={this.state.summary}/>
      <TeamDescription data={this.state}/>
      {this.state.contents.map((review) => {
      return (
          <Review key={review._id} data={review} />
        )
      })
    }
    <Roster data={this.state.list}/>

    </div>
    )
  }
}
