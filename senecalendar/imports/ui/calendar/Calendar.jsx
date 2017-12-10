import React, { Component } from 'react';
import { Template } from 'meteor/templating';

class Calendar extends Component {

	componentDidMount(){
		var calendarId = (Meteor.user())?Meteor.user().calendarId:-1;
		$( '#events-calendar' ).fullCalendar({
	        googleCalendarApiKey: '',
	        events: {
	            googleCalendarId: calendarId,
	            className: 'gcal-event'
	        }
	    });
	}

  	render() {
    	return (
      		<div className="container calendar">
      			<div className="calendar-title"><h1>Calendar Title</h1></div>
      			<div className="calendar-container">
					<div id="events-calendar"></div>
      			</div>
      		</div>
    	);
  	}
}

export default Calendar;
