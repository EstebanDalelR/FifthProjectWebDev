import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HTTP } from 'meteor/http';

// https://www.npmjs.com/package/react-dates
// https://www.npmjs.com/package/react-datepicker
class EventCreator extends Component {

    constructor(props) {
        super(props);
        //this.state = props;
    }

    postToCalendar() {
        var url = "https://www.googleapis.com/calendar/v3/calendars/primary/events/quickAdd?text=no%20morir";
        // var url = "https://www.googleapis.com/calendar/v3/calendars/" + this.props.currentUser.calendarId + "/events";
        // var url = "https://www.googleapis.com/calendar/v3/calendars/" + this.getUserCalendars.data.items[0].id + "/events";
        var options = {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.props.currentUser.services.google.accessToken,
                'X-JavaScript-User-Agent': "Google APIs Explorer",
                text:'dedddd'
            },

        };
        HTTP.post(url, options, (error, result) => {
            if (!error) {
                console.log("success");
            } else {
                error = 'Error getting calendars: ' + error;
            }
        });
    }
    renderNewEventForm() {
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
            );
        }
    }


    render() {
        return (
            <div>
                <button onClick={() => { this.postToCalendar() }}>Agregar evento</button>
                <h4>¿Qué van a hacer?</h4>
                        <input
                            className="container-fluid border"
                            type="text"
                            ref="eventTitle"
                        />
            </div>
        );
    }

}
export default EventCreator;
