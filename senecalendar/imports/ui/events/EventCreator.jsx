import React, { Component } from 'react';
import { HTTP } from 'meteor/http';
// https://www.npmjs.com/package/react-dates
// https://www.npmjs.com/package/react-datepicker
class EventCreator extends Component {

    constructor(props) {
        super(props);
        this.state = { calendarList: undefined };
    }
}
createNewEvent(){
    var event = {
        'summary': 'Google I/O 2015',
        'location': '800 Howard St., San Francisco, CA 94103',
        'description': 'A chance to hear more about Google\'s developer products.',
        'start': {
            'dateTime': '2015-05-28T09:00:00-07:00',
            'timeZone': 'America/Los_Angeles',
        },
        'end': {
            'dateTime': '2015-05-28T17:00:00-07:00',
            'timeZone': 'America/Los_Angeles',
        },
        // 'recurrence': [
        //     'RRULE:FREQ=DAILY;COUNT=2'
        // ],
        'attendees': [
            { 'email': 'lpage@example.com' },
            { 'email': 'sbrin@example.com' },
        ],
        'reminders': {
            'useDefault': false,
            'overrides': [
                { 'method': 'email', 'minutes': 24 * 60 },
                { 'method': 'popup', 'minutes': 10 },
            ],
        },
    };

    calendar.events.insert({
        auth: auth,
        calendarId: 'primary',
        resource: event,
    }, function (err, event) {
        if (err) {
            console.log('There was an error contacting the Calendar service: ' + err);
            return;
        }
        console.log('Event created: %s', event.htmlLink);
    });

}
renderNewEventForm(){
    if (calendarList == undefined) {
        return (<h3>Debes estar loggeado para invitar a un evento</h3>);
    } else {
        return (
            <div>
                <div className=" rounded border border-secondary">
                    <h4>¿A quién quieres invitar?</h4>
                    <input
                        className="container-fluid border"
                        type="text"
                        ref="invitedPerson"
                    />
                    <h4>¿Qué van a hacer?</h4>
                    <input
                        className="container-fluid border"
                        type="text"
                        ref="eventTitle"
                    />
                    <h4>¿Dónde se van a ver?</h4>
                    <input
                        className="container-fluid border"
                        type="text"
                        ref="eventLocation"
                    />
                    <h4>¿Cuándo empieza?</h4>
                    <input
                        className="container-fluid border"
                        type="text"
                        ref="eventStartDate"
                    />
                    <h4>¿Cuándo termina?</h4>
                    <input
                        className="container-fluid border"
                        type="text"
                        ref="eventEndDate"
                    />
                </div>
                <button className='btn-primary btn-lg'
                    onClick={this.handleSubmit.bind(this)}>
                    Preguntar
                </button>
            </div>
        )
    }
}
render(){
    <div>
        <button>Agregar evento</button>
    </div>
}
export default EventCreator;
