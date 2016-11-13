import React from 'react';

export default class SportsList extends React.Component {


	render() {
		return (
	<div clasName="col-md-8">
      <div className= "panel panel-default">
        <div className="panel-body">
          <div className="row">
            <h1><p className="text-center"> {this.props.sport.sportName} </p></h1>
             <hr>
             <div className="row">
             	<div className="col-md-4">
             		<img src={this.props.sport.sportPic} width="100%">
             	</div>
             	<!-- NEED TO MAP TeamSizes here -->
             </div>



            </div>
          </div>
        </div>
      </div>
		)
	}
}
