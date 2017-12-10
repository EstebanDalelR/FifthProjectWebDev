import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import Navbar from './navigation/Navbar.jsx';
import Calendar from './calendar/Calendar.jsx';
import AddCalendar from './calendar/AddCalendar.jsx';

class App extends Component {

	constructor(props){
		super(props);
		this.state = {calendarList:' '};
	}

	getUserCalendars(){
		var url = "https://www.googleapis.com/calendar/v3/users/me/calendarList";
		var options = {
				'headers' : {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + Meteor.user().services.google.accessToken,
					'X-JavaScript-User-Agent': "Google APIs Explorer"
				},
				'params' : {
					maxResults : 25
				}
			};
		var calendarList = HTTP.get(url, options, (error, result)=>{
			console.log('error: ', error);
			console.log('result: ', result);
			if(!error){
				return result;
			}else{
				return 'Error getting calendars: '+error;
			}
		});
		this.setState(()=>{return{calendarList:calendarList}});
	}

	render() {
	    return (
		    <div>
		    	<Navbar></Navbar>
		    	<AddCalendar calendarList = {this.state.calendarList} getUserCalendars = {this.getUserCalendars.bind(this)}></AddCalendar>
		    	<Calendar></Calendar>
		    </div>
	    );
	}
}

export default withTracker(props => {
	if(Meteor.user()){
		Meteor.subscribe('user');
	}
	return {
		currentUser: (Meteor.user())?Meteor.user():{},
	};
})(App);
