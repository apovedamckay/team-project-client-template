import React from 'react';
import TeamReview from './teamReview';
import TeamSummary from './teamSummary';


export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
    };
  }

render() {
  return (
    <div>
      <TeamSummary />
      <TeamDescription />
      {this.state.contents.map((review) => {
      return (
          <TeamReview key={review._id} data={review} />
        )
      })
    }
    </div>
    )
  }
}
