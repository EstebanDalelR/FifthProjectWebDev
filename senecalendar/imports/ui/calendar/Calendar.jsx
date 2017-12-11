import React, { Component } from 'react';
import { Template } from 'meteor/templating';

import EventCreator from '../events/EventCreator.jsx';

class Calendar extends Component {

	constructor(props) {
		super(props);
	}

	componentDidUpdate() {
		$('#events-calendar').fullCalendar('refetchEvents');
	}

	componentDidMount() {
		$('#events-calendar').fullCalendar({
			googleCalendarApiKey: 'AIzaSyBE6yzd86yNAUL6BO9auKqQXE4ijwXUucI',
			events: {
				googleCalendarId: this.props.calendarId,
				className: 'gcal-event'
			}
		});
	}

	render() {
		return (
			<div className="container calendar">
				<div className="calendar-title"><h1>{}</h1></div>
				<div className="calendar-container">
					<div id="events-calendar"></div>
				</div>
				<EventCreator currentUser={this.props.currentUser}/>
			</div>
		);
	}
}

export default Calendar;
