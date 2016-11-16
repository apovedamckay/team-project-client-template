import React from 'react';
import SportsBox from './sportsBox';
import {getSportData} from '../server';

export default class SportsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sports: [
      ]
    };
}

  refresh() {
    getSportData(1, (sportData) => {
         this.setState(sportData);
    });
}

  componentDidMount() {
    this.refresh();
  }

	render() {
		return (
      <div>
      <h1>SportsList</h1>
      {console.log(this.state)}
        {this.state.sports.map((sport, i) => {
              return(
               <SportsBox key={i} name={sport.name} data={sport}/>
              );
           })
        }
       </div>
    )
	}
}
    