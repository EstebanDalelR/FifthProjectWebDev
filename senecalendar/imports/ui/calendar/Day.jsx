import React, { Component } from 'react';

class Day extends Component{
	constructor(props){
		super(props);
		this.state = {
			year:2017,
			week: 36
		}
	}

	render(){
		return(
				<div className="day">
					<div className="day-number"></div>
					<div className="day-event"></div>
				</div>
			);
	}
}

export default Day;