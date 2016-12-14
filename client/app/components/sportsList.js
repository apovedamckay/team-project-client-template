import React from 'react';
import SportsBox from './sportsBox';
import {getSportData} from '../server';

export default class SportsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     sports: []
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
    if(this.state !== undefined){
    {console.log(this.state)}
		return (
      <div className="col-md-10">
        {this.state.sports.map((sport, i) => {
              return(
               <SportsBox key={i} img={sport.img} name={sport.name} data={sport}/>
              );
           })
        }
       </div>
    )
      }
	}
}
