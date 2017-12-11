import React, { Component } from 'react';
import { Template } from 'meteor/templating';

import EventCreator from '../events/EventCreator.jsx';

class Calendar extends Component {

	constructor(props) {
		super(props);
	}

	componentDidUpdate() {
		if(this.props.calendarId != 'b6d4f2lpee67ih3q0a4k37cvb0@group.calendar.google.com'){
			$('#events-calendar').fullCalendar('destroy');
			$('#events-calendar').fullCalendar({
				googleCalendarApiKey: 'AIzaSyBE6yzd86yNAUL6BO9auKqQXE4ijwXUucI',
				eventSources:[
		            {
		                googleCalendarId: 'b6d4f2lpee67ih3q0a4k37cvb0@group.calendar.google.com'
		            },
					{
						googleCalendarId: this.props.calendarId
					}
				]
			});
		}else{
			$('#events-calendar').fullCalendar('destroy');
			$('#events-calendar').fullCalendar({
				googleCalendarApiKey: 'AIzaSyBE6yzd86yNAUL6BO9auKqQXE4ijwXUucI',
			   	eventSources: [
		            {
		                googleCalendarId: 'b6d4f2lpee67ih3q0a4k37cvb0@group.calendar.google.com'
		            }
	        	]
	    	});
		}
	}

	componentDidMount() {
		$('#events-calendar').fullCalendar({
			googleCalendarApiKey: 'AIzaSyBE6yzd86yNAUL6BO9auKqQXE4ijwXUucI',
		   	eventSources: [
	            {
	                googleCalendarId: 'b6d4f2lpee67ih3q0a4k37cvb0@group.calendar.google.com'
	            }
        	]
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
