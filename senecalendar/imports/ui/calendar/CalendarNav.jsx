import React, { Component } from 'react';
class CalendarNav extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="calendar-nav container">
				<button className="calendar-back-but col-md-3 col-sm-3">P week</button>
				<div className="calendar-week col-md-6 col-sm-6"><h4>6 – 12 de nov de 2017</h4></div>
				<button className="calendar-forward-but col-md-3 col-sm-3">N week</button>
			</div>
		);
	}
}

export default CalendarNav;