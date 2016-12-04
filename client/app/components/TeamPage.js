import React from 'react';
//import Review from './pageReviews';
import TeamSummary from './teamSummary';
import TeamDescription from './teamDescription';
import Roster from './roster';
import TeamReview from "./teamReview";
import {getTeamData, postTeamReview, submitChallenge, postForumPost} from '../server';
import Navbar from './navbar';
import LeftSidebar from './LeftSidebar';
import ReviewWriter from './reviewWriter';
import Challenge from './challenge';
import ChallengeRecieved from './ChallengeRecieved';
import ForumPost from './forumPost';
import PostToForum from './postToForum';


export default class TeamPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showStuff: null,
      summary:{
        name: "",
        stars: [],
        location: "",
        record: ""
      },
      reviews: [],
      list:[],
      Challenges: [],
      posts: []
    };
  }
  componentDidMount() {
    this.refresh();
  }

  refresh() {
    getTeamData(this.props.team, (teamData) => {
      this.state.showStuff = true;
      this.setState(teamData);
    });
  }

  onPost(postContents) {
    postTeamReview(postContents, this.state._id, (teamReturn) => {
      this.setState(teamReturn);
      this.refresh();
    });
  }
  onChallenge(challenger, challengedate, challengetime) {
    submitChallenge(challenger, challengedate, challengetime, this.state._id, (teamReturn) => {
      this.setState(teamReturn);
      this.refresh();
    });
  }
  onForumPost(forumPostContents) {
    postForumPost("Member of team", forumPostContents, this.state_id, (teamReturn) => {
      this.setState(teamReturn);
      this.refresh();
    });
  }

render() {
    var summary = null;
    var description = null;
    var roster = null;
    if(this.state.showStuff) {
        summary = <TeamSummary data={this.state.summary}/>;
        description = <TeamDescription data={this.state}/>;
        roster = <Roster data={this.state}/>;
    }
    return (
      <div>
        <Navbar/>
        <LeftSidebar/>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
                <h1>{this.state.summary.teamName}</h1>
                {summary}
                {description}
                <h2>Reviews:</h2>
                {this.state.reviews.map((review, i) => {
                return (
                    <TeamReview key={i} data={review} />
                  )
                })
              }
              <h4>Write a Review:</h4>
              <ReviewWriter onPost={(postContents) => this.onPost(postContents)}/>
              <h2>Active Challenges:</h2>
              {this.state.Challenges.map((challenge, i) => {
                return (
                    <ChallengeRecieved key={i} data={challenge} />
                  )
                })
              }
              <h4>Challenge Them!</h4>
              <Challenge onChallenge={(challenger, challengedate, challengetime) => this.onChallenge(challenger, challengedate, challengetime)}/>
              <h4>Private Team Chat:</h4>
              {this.renderForum()}
            </div>
        {roster}
    </div>
    </div>

      </div>
      )
    }
    renderForum(){
      return (true)
      // The line below is the actual team check, but it was commented out
      // for demonstration purposes
      // return ((this.state.list).includes("Ilan Shenar"))
      ? <span>  {this.state.posts.map((post, i) => {
        return (
            <ForumPost key={i} data={post} />
          )
        })
      }
    <PostToForum onForumPost={(forumPostContents) => this.onForumPost(forumPostContents)}/>
    </span>
    : <span> You're not a member of this team.</span>;
    }
}
