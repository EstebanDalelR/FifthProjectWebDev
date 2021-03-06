import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';

if(Meteor.isServer){
  Accounts.onCreateUser((options, user) => {
    if (user.services.google) {
      user.name=user.services.google.name;
      user.email=user.services.google.email;
      user.picture=user.services.google.picture;
      user.isGoogle=true;
    }else{
      user.name=user.username;
      user.isGoogle=false;
    }
    user.calendarId  = 'b6d4f2lpee67ih3q0a4k37cvb0@group.calendar.google.com';
    user.calendarData = ' ';
    // We still want the default hook's 'profile' behavior.
    if (options.profile) {
      user.profile = options.profile;
    }
    // Don't forget to return the new user object at the end!
    return user;
  });
}

Meteor.publish('user',
  function(){
    return Meteor.users.find(this.userId,
      {fields: {name: 1,email: 1,picture: 1,isGoogle: 1,profile: 1, calendarId: 1, calendarData: 1, services: 1}});
  }
);

Meteor.methods({
  'users.setCalendar'({ userId, calendarId , calendarData}) {
    const user = Meteor.users.findOne(userId);
    Meteor.users.update(userId, {
      $set: { calendarId: calendarId , calendarData: calendarData}
    });
  },
  'users.removeCalendar'({ userId }){
    const user = Meteor.users.findOne(userId);
    Meteor.users.update(userId, {
      $set: { calendarId:'b6d4f2lpee67ih3q0a4k37cvb0@group.calendar.google.com' , calendarData: ' '}
    })
  },
  'users.checkAvailable'(userId, invitedUserId){
    const user = Meteor.users.findOne(userId);
    const invited = Meteor.users.findOne(invitedUserId);

    if(invited.isNullOrUndefined){
      throw new Meteor.Error('users.checkAvailable.invitedDoesNotExist','The invited user does not exist'); 
    }else{
      //fetch freeBusy gapi
    }
  }

});
