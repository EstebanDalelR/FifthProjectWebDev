import React, { Component } from 'react';

import Navbar from './navigation/Navbar.jsx';
import Calendar from './calendar/Calendar.jsx';

class App extends Component {

  render() {
    return (
	    <div>
	    	<Navbar></Navbar>
	    	<Calendar></Calendar>
	    </div>
    );
  }

}

export default App;
