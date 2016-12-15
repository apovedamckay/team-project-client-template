import React from 'react';
import {Link} from 'react-router';

export default class WelcomePage extends React.Component {
  render() {
    return (
		<div>
			<h1>Who's Profile Would you Like to see?</h1>
			<Link to={"/profile/000000000000000000000001"}><li>Ilan Shenar</li></Link>
			<Link to={"/profile/000000000000000000000002"}><li>Jean Webb</li></Link>
			<Link to={"/profile/000000000000000000000003"}><li>Max Galat</li></Link>
			<Link to={"/profile/000000000000000000000004"}><li>Ernest Brooks</li></Link>
			<Link to={"/profile/000000000000000000000005"}><li>Virginia Shaw</li></Link>
			<Link to={"/profile/000000000000000000000006"}><li>Mark Sanchez</li></Link>
			<Link to={"/profile/000000000000000000000007"}><li>Kim Tucker</li></Link>
			<Link to={"/profile/000000000000000000000008"}><li>Kathy Long</li></Link>
			<Link to={"/profile/000000000000000000000009"}><li>Kimberly Jones</li></Link>
			<Link to={"/profile/0000000000000000000000010"}><li>Teresa Hughes</li></Link>

		</div>
		)
	}
}
