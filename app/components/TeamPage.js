import React from 'react';
//import Review from './pageReviews';
import TeamSummary from './teamSummary';
import TeamDescription from './teamDescription';
import Roster from './roster';
import TeamReview from "./teamReview";
import {getTeamData} from '../server';


export default class TeamPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summary:{
        name: "",
        stars: [],
        location: "",
        record: ""
      },
      reviews: [],
      list:[]
    };
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
      {console.log(this.state)}
      <TeamSummary data={this.state.summary}/>
      <TeamDescription data={this.state}/>
      {this.state.reviews.map((review, i) => {
      return (
          <TeamReview key={i} data={review} />
        )
      })
    }
    <Roster data={this.state}/>

    </div>
    )
  }
}
