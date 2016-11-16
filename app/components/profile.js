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

  checkReferee(){
    var refCheck = true;
    if(this.state.referee === false){
      refCheck = false;
    }
    return refCheck;
  }

render() {

  if(this.checkReferee() === true){
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

  if(this.checkReferee() === false){
  return (
<<<<<<< HEAD
     <div>
      <Schedule />
=======
    <div>
      <PlayerSummary data={this.state.summary}/>
      <PlayerDescription data={this.state}/>
>>>>>>> 32ce6dfe15e922ec0e0c3c42470f18f34adc09d3
      {this.state.contents.map((review) => {
      return (
          <Review key={review._id} data={review} />
        )
      })
    }
<<<<<<< HEAD
    </div>
=======
    <Schedule data={this.state.schedule}/>
    <TeamList data={this.state.list}/>
  </div>
>>>>>>> 32ce6dfe15e922ec0e0c3c42470f18f34adc09d3
    )
  }
}
}
