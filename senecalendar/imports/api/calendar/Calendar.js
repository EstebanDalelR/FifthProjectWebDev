import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Calendar = new Mongo.Collection("calendar");

if (Meteor.isServer) {
  	// This code only runs on the server
	Meteor.publish('calendarr', ()=>{
	  return Calendar.find();
	});

	Meteor.methods({
		'calendar.getUserCalendar'({
			}){
			Questions.insert({
				title:title,
				postedat:postedat,
				theme:theme,
				votes:votes,
				answers:answers,
				text:text,
				userId:userId,
				poster:poster
			});
		}
	});
}
