import React from 'react';
import UserSummary from './UserSummary';
import Schedule from './pageSchedule';
import TeamSummary from './TeamSummary';
import {getUserData} from '../server';
import TeamReview from "./teamReview";


export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       show: null, 
      users: []
    };
  }


  refresh() {
    getUserData(this.props.user, (userData) => {
         this.state.show = true;
         this.setState(userData);
    });
}

  componentDidMount() {
    this.refresh();
  }


render() {
  var summary = null;
  var feedSummary = null;

  if(this.state.show){
    summary = <UserSummary data={this.state}/>
    feedSummary = <TeamSummary data ={this.state} />
  }
  return(
    <div>
    {summary}
    <div className="col-md-8">
    {feedSummary}
    {console.log(this.state.player_review)}
    <Schedule />
    <h3>Reviews:</h3>
    </div>
    </div>


  )

  /*
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
  }*/
}
}
