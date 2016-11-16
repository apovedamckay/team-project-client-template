import React from 'react';

export default class SportsBox extends React.Component {
	render() {
		return (
			<ul>
			<div className="col-md-8">
				<div className= "panel panel-default">
                  <div className="panel-body">
          <div className="row">
            <h1><p className="text-center">{this.props.name}</p></h1>
            <hr></hr>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img src="../img/ball-large.png" width="100%"></img>
            </div>
            <div className="col-md-2">
              <a href="searchteampage.html"><h2><p className="text-center">1v1</p></h2></a>
              <br></br>
              <br></br>
              <a href="searchteampage.html"><h2><p className="text-center">2v2</p></h2></a>
              <br></br>
              <br></br>
            </div>
              <div className="col-md-2">
              <a href="searchteampage.html"><h2><p className="text-center">3v3</p></h2></a>
              <br></br>
              <br></br>
              <a href="searchteampage.html"><h2><p className="text-center">4v4</p></h2></a>
              <br></br>
              <br></br>
            </div>
            <div className="col-md-2">
              <a href="searchteampage.html">  <h2><p className="text-center">5v5</p></h2></a>
                <br></br>
                <br></br>
              <a href="searchteampage.html">  <h2><p className="text-center">6v6</p></h2></a>
            </div>
          </div>
        </div>
      </div>
      </div>
      </ul>
		);	
	}
}