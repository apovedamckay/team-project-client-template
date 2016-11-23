import React from 'react';
import {getTeamArray} from '../server';
import {BrowseTeamBox} from './browseTeamBox';

export default class BrowseTeam extends React.Component {
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
  {console.log(this.state)}
  return (
    <div className="col-md-10">
      {this.state.teams.map((team, i) => {
            return(
             <BrowseTeamBox key={i} data={team}/>
            );
         })
      }
     </div>
  );
}
}
