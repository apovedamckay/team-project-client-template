import React from 'react';

export default class SportsBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		contents: []
		};
	}

	render() {
		return (
			<div>
				<Sport/>
					{this.state.contents.map((sport) => {
						return (
							<SportBox key = {sport._id} data = {sport} />
							)
					})
			}
			</div>
		)	
	}
}