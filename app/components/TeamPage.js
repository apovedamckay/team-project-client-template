import React from 'react';
import Review from './pageReviews';
import TeamSummary from './teamSummary';
import TeamDescription from './teamDescription';
import Roster from './roster';
import {getTeamData} from '../server';


export default class TeamPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  componentDidMount() {
    this.refresh();
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
      {this.state.reviews.map((review) => {
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
