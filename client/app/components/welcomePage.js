import React from 'react';
import {Link} from 'react-router';

export default class WelcomePage extends React.Component {
  render() {
    return (
		<div>
			<h1>Who's Profile Would you Like to see?</h1>
			<Link to={"/profile/1"}><li>Ilan Shenar</li></Link>
			<Link to={"/profile/2"}><li>Jean Webb</li></Link>
			<Link to={"/profile/3"}><li>Max Galat</li></Link>
			<Link to={"/profile/4"}><li>Ernest Brooks</li></Link>
			<Link to={"/profile/5"}><li>Virginia Shaw</li></Link>
			<Link to={"/profile/6"}><li>Mark Sanchez</li></Link>
			<Link to={"/profile/7"}><li>Kim Tucker</li></Link>
			<Link to={"/profile/8"}><li>Kathy Long</li></Link>
			<Link to={"/profile/9"}><li>Kimberly Jones</li></Link>
			<Link to={"/profile/10"}><li>Teresa Hughes</li></Link>

		</div>
		)
	}
}