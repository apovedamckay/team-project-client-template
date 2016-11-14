import React from 'react';
import PlayerReview from './teamReview';
import PlayerSummary from './teamSummary';
import TeamList from './teamList';


export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
    };
  }

render() {
  return (
    <div>
      <PlayerSummary data={this.state.summary}/>
      <PlayerDescription data={this.state}/>
      {this.state.contents.map((review) => {
      return (
          <PlayerReview key={review._id} data={review} />
        )
      })
    }
    <TeamList data={this.state.list}/>

    </div>
    )
  }
}
