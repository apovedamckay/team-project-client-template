import React from 'react';
import UserSummary from './UserSummary';
import Schedule from './pageSchedule';
import TeamSummary from './TeamSummary';
import {getUserData, postReview} from '../server';
import TeamReview from "./teamReview";
import ReviewWriter from './reviewWriter';


export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       show: null, 
       first_name: "",
       last_name: "",
       username: "",
       profile_picture: "",
       player_review: [
              {
          stars: [],
          text: ""
              }
            ],
            ref_review: [],
            email: "",
            stars: [],
            location: "",
            summary: "",
            teamList: []
    };
  }

  onPost(postContents) {
    postReview(postContents, 1, (reviewReturn) => {
      this.setState(reviewReturn);
      this.refresh();
    });
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
    <Schedule />
    <h3>Reviews:</h3>
       {this.state.player_review.map((review, i) => {
          return (
             <TeamReview key={i} data={review} />
                  )
                })
              }
              <h4>Write a Review:</h4>
              <ReviewWriter onPost={(postContents) => this.onPost(postContents)}/>
    </div>
    </div>


  )
}
}
