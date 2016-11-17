import React from 'react';
import {getTeamArray} from '../server';
import {SearchTeamBox} from './searchTeamBox';

export default class SearchTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: []
    };
}

refresh() {
  getTeamArray(1, (teamData) => {
       this.setState(teamData);
  });
}

componentDidMount() {
  this.refresh();
}

render() {
  return (
    <div className="col-md-10">
    {console.log(this.state.teams)}
      {this.state.teams.map((team, i) => {
            return(
             <SearchTeamBox key={i} data={team}/>
            );
         })
      }
     </div>
  );
}
}
