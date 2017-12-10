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
		this.state = {calendarList:undefined};
	}


	render() {
	    return (
		    <div>
		    	<Navbar></Navbar>
		    	<AddCalendar></AddCalendar>
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
