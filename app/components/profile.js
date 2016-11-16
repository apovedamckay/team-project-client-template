import React from 'react';
import Review from './pageReviews';
import PlayerSummary from './teamSummary';
import TeamList from './teamList';
import Schedule from './pageSchedule';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

render() {
  if(this.state.referee === true){
  return (
    <div>
      <PlayerSummary data={this.state.summary}/>
      <PlayerDescription data={this.state}/>
      {this.state.contents.map((review) => {
      return (
          <Review key={review._id} data={review} />
        )
      })
    }
    <Schedule data={this.state.schedule}/>
  </div>
    )
  }

  if(this.state.referee === false){
  return (
     <div>
      <PlayerSummary data={this.state.summary}/>
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
}
