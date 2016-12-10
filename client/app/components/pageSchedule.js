import React from 'react';
import Calendar from 'rc-calendar'


export default class Schedule extends React.Component {

  render(){
   return (
    <div className="col-md-12">
      <div className= "panel panel-default">
        <div className="panel-body">
          <div className="centerBlock">
          <Calendar />
          </div>
</div> 
</div>
</div>
   )
  }

}
