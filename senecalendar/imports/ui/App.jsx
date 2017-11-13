import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import Navbar from './navigation/Navbar.jsx';
import Calendar from './calendar/Calendar.jsx';
import AddCalendar from './calendar/AddCalendar.jsx';

class App extends Component {

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

export default AppContainer = createContainer((props) => {
	if(Meteor.user()){
		Meteor.subscribe('user');
	}
	return {
		_id: Meteor.userId(),
		currentUser: (Meteor.user())?Meteor.user():{},
		calendar: (Meteor.user())?Meteor.user().calendar:-1,
	};
}, App);
