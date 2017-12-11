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
        // var url = "https://www.googleapis.com/calendar/v3/calendars/primary/events/quickAdd?text=" +textToSend;
        // var url = "https://www.googleapis.com/calendar/v3/calendars/" + this.props.currentUser.calendarId + "/events";
        // var url = "https://www.googleapis.com/calendar/v3/calendars/" + this.getUserCalendars.data.items[0].id + "/events";
        //freeBusy api https://www.googleapis.com/calendar/v3/freeBusy
        //if(invitee tiene cuenta)> hacer el freebusycon su calendario>responder con la disponibilidad

        var url = "https://www.googleapis.com/calendar/v3/calendars/" + this.props.currentUser.calendarId + "/events/quickAdd?text=" + textToSend;
        const timezone = "America/Bogota";
        let invitee = ReactDOM.findDOMNode(this.refs.invitedPerson).value.trim();
        let textToSend = ReactDOM.findDOMNode(this.refs.eventTitle).value.trim();
        let endDateTime = ReactDOM.findDOMNode(this.refs.eventEndDate).value.trim();
        let startDateTime = ReactDOM.findDOMNode(this.refs.eventStartDate).value.trim();
        // {
        //     "end": {
        //       "dateTime": "2017-12-28T09:00:00",
        //       "timeZone": "America/Bogota"
        //     },
        //     "description": "morirrr",
        //     "start": {
        //       "dateTime": "2017-12-28T08:00:00",
        //       "timeZone": "America/Bogota"
        //     }
        //   }
        var options = {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.props.currentUser.services.google.accessToken,
                'X-JavaScript-User-Agent': "Google APIs Explorer",
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


    render() {
        let today = new Date();

        return (
            <div className=" rounded border border-secondary">
                <label>¿Quieres invitar a alguien?
                <input
                    className="container-fluid border"
                    type="email"
                    ref="invitedPerson"
                />
                </label>
                <label>¿Qué van a hacer?
                <input
                    className="container-fluid border"
                    type="text"
                    ref="eventTitle"
                    placeholder="Tarea de WEB"
                />
                </label>
                <label>¿Dónde se van a ver?
                <input
                    className="container-fluid border"
                    type="text"
                    ref="eventLocation"
                    list="edificios"
                    placeholder="ML"
                />
                </label>
                <datalist id="edificios">
                    <option value='A' />
                    <option value='Au' />
                    <option value='Au2' />
                    <option value='Au03' />
                    <option value='Au04' />
                    <option value='Au05' />
                    <option value='Au06' />
                    <option value='Au07' />
                    <option value='B' />
                    <option value='C' />
                    <option value='Ch' />
                    <option value='D' />
                    <option value='E' />
                    <option value='Es' />
                    <option value='F' />
                    <option value='G' />
                    <option value='Ga' />
                    <option value='H' />
                    <option value='I' />
                    <option value='J' />
                    <option value='K' />
                    <option value='K1' />
                    <option value='K2' />
                    <option value='L' />
                    <option value='La' />
                    <option value='LL' />
                    <option value='M' />
                    <option value='M1' />
                    <option value='Mj' />
                    <option value='ML' />
                    <option value='N' />
                    <option value='Ña' />
                    <option value='Ñb' />
                    <option value='Ñd' />
                    <option value='Ñe' />
                    <option value='Ñf' />
                    <option value='Ñg' />
                    <option value='Ñh' />
                    <option value='Ñi' />
                    <option value='Ñj' />
                    <option value='Ñk' />
                    <option value='Ñl' />
                    <option value='Ño' />
                    <option value='Ñv' />
                    <option value='O' />
                    <option value='P' />
                    <option value='P1' />
                    <option value='Pu' />
                    <option value='Es' />
                    <option value='Q' />
                    <option value='Cp' />
                    <option value='R' />
                    <option value='Rga' />
                    <option value='Rgb' />
                    <option value='Rgc' />
                    <option value='S' />
                    <option value='Sd' />
                    <option value='S1' />
                    <option value='T' />
                    <option value='Tm' />
                    <option value='Tr' />
                    <option value='Tx' />
                    <option value='U' />
                    <option value='V' />
                    <option value='X' />
                    <option value='Y' />
                    <option value='Z' />
                </datalist>
                <label>¿Cuándo empieza?
                <input
                    className="container-fluid border"
                    type="datetime-local"
                    ref="eventStartDate"
                    min={today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate() + "T08:30"}
                    required
                />
                </label>
                <label>¿Cuándo termina?
                <input
                    className="container-fluid border"
                    type="datetime-local"
                    ref="eventEndDate"
                    min={today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate() + "T08:30"}
                    required
                />
                </label>
                <button
                    className="btn btn-success"
                    type="submit"
                    onClick={() => { this.postToCalendar() }}>
                    Agregar evento
                </button>
                <input 
                className="btn btn-warning"
                type="reset" 
                value="Borrar"
                />
            </div>
        );
    }

}
export default EventCreator;
