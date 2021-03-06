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
		this.state = {
			calendarList:' '
		};
	}

	getUserCalendars(){
			var url = "https://www.googleapis.com/calendar/v3/users/me/calendarList";
			var options = {
					'headers' : {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + this.props.currentUser.services.google.accessToken,
						'X-JavaScript-User-Agent': "Google APIs Explorer"
					},
					'params' : {
						maxResults : 25
					}
				};
			HTTP.get(url, options, (error, result)=>{
				if(!error){
					this.setState(()=>{return {calendarList:result}});
				}else{
					error = 'Error getting calendars: '+error;
				}
			});
	}

	selectCalendar(cdata){
		Meteor.call('users.setCalendar',{
			userId:this.props.currentUser._id,
			calendarId:cdata.id,
			calendarData:cdata
		}, (err, res) => {
		  if (err) {
		    console.log(err);
		  } else {
		    // success!
		  }
		});
	}

	removeCalendar(){
		Meteor.call('users.removeCalendar',{
			userId:this.props.currentUser._id
		}, (err, res)=>{
			if(err){
				console.log(err);
			}else{
				// success!
			}
		});
	}

	render() {
	    return (
		    <div>
		    	<Navbar></Navbar>
		    	<AddCalendar selectCalendar = {this.selectCalendar.bind(this)} 
		    		removeCalendar = {this.removeCalendar.bind(this)}
		    		calendarList = {this.state.calendarList} 
		    		getUserCalendars = {this.getUserCalendars.bind(this)}>
		    	</AddCalendar>
		    	<Calendar calendarId={(this.props.currentUser.calendarId)?this.props.currentUser.calendarId:'b6d4f2lpee67ih3q0a4k37cvb0@group.calendar.google.com'}
		    		currentUser={this.props.currentUser}>
		    	</Calendar>
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
