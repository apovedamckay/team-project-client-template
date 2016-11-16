import React from 'react';
import Review from './pageReviews';
import PlayerSummary from './teamSummary';
import TeamList from './teamList';
import Schedule from './pageSchedule';


export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "Ilan",
      last_name: "Shenar",
      email: "ishenar@umass.edu",
      referee: false
    };
  }

render() {
  return (
     <div>
      <Schedule />
      {this.state.contents.map((review) => {
      return (
          <Review key={review._id} data={review} />
        )
      })
    }
    </div>
    )
  }
}
