import React from 'react';
import Review from './pageReviews';
import TeamList from './teamList';
import Schedule from './pageSchedule';


export default class referee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
    };
  }

render() {
  return (
    <div>
      <ProfileSummary data={this.state.ProfileSummary}/>
      <PlayerDescription data={this.state}/>
      {this.state.contents.map((review) => {
      return (
          <Review key={review._id} data={review} />
        )
      })
    }
    <Schedule data={this.state.schedule}/>
    <TeamList data={this.state.list}/>
    </div>
    )
  }
}
