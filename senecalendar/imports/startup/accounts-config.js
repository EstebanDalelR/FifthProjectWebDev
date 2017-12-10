import { Accounts } from 'meteor/accounts-base';
 
Accounts.ui.config({
  	passwordSignupFields: 'USERNAME_ONLY',
  	requestPermissions: {
		google: [
			'https://www.googleapis.com/auth/calendar',
		]
	},
		requestOfflineToken: {
		    google: true
		}
});