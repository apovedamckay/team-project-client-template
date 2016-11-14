import React from 'react';
import TeamReview from './teamReview';
import TeamSummary from './teamSummary';
import TeamList from './teamList';


export default class TeamPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
    };
  }

render() {
  return (
    <div>
      <TeamSummary data={this.state.summary}/>
      <TeamDescription data={this.state}/>
      {this.state.contents.map((review) => {
      return (
          <TeamReview key={review._id} data={review} />
        )
      })
    }
    <TeamList data={this.state.list}/>

    </div>
    )
  }
}
