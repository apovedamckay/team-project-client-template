import React from 'react';
import SportsBox from './sportsBox';

export default class SportsList extends React.Component {


	render() {
		return (
      <div>
	      <div clasName="col-md-8">
          <div className= "panel panel-default">
           <div className="panel-body">
            <div className="row">
             <h1><p className="text-center"> {this.props.sport.sportName} </p></h1>
             <hr>
              <div className="row">
              	<div className="col-md-4">
             	  	<img src={this.props.sport.sportPic} width="100%"></img>
                </div>
                 <ul className="media-list">
                  {React.Children.map(this.props.children, function(child) {
                    return (
                      <li className="media">
                        {child}
                      </li>
                      )
                    })}
                 </ul>
              </div>
              </hr>
          	</div>
          </div>
        </div>
      </div>
  		)
	}
}