import React from 'react';
import Review from './pageReviews';
import UserSummary from './UserSummary';
import TeamList from './teamList';
import Schedule from './pageSchedule';
import {getUserData} from '../server';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }


  refresh() {
    getUserData(this.props.user, (userData) => {
         this.setState(userData);
    });
}

  componentDidMount() {
    this.refresh();
  }


render() {
  return(
    <div>
    <h2>Profile</h2>
    {console.log(this.state)}
    <UserSummary data={this.state}/>
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
