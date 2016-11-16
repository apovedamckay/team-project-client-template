import React from 'react';
//import Review from './pageReviews';
import TeamSummary from './teamSummary';
import TeamDescription from './teamDescription';
import Roster from './roster';
import TeamReview from "./teamReview";
import {getTeamData, postReview} from '../server';
import Navbar from './navbar';
import LeftSidebar from './LeftSidebar';
import ReviewWriter from './reviewWriter';


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
      list:[]
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
    postReview(postContents, 1, (teamReturn) => {
      this.setState(teamReturn);
      this.refresh();
    });
  }

render() {
    console.log(this.state);
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
            </div>
        {roster}
    </div>
    </div>

      </div>
      )
    }

}
