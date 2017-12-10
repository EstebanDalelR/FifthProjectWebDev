import React, { Component } from 'react';
import { Template } from 'meteor/templating';

class Calendar extends Component {

	constructor(props){
		super(props);
	}

	componentDidUpdate(){
		$( '#events-calendar' ).fullCalendar('refetchEvents');
	}

	componentDidMount(){
		$( '#events-calendar' ).fullCalendar({
	        googleCalendarApiKey: '',
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
      		</div>
    	);
  	}
}

export default Calendar;
