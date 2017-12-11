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



    // Make sure the client is loaded and sign-in is complete before calling this method.
    // execute() {
    //     return gapi.client.calendar.events.insert({
    //         "calendarId": "b6d4f2lpee67ih3q0a4k37cvb0@group.calendar.google.com",
    //         "resource": {
    //             "start": {
    //                 "dateTime": "2017-12-28T09:00:00-07:00"
    //             },
    //             "end": {
    //                 "dateTime": "2017-12-28T09:00:00-09:00"
    //             }
    //         }
    //     })
    //         .then(function (response) {
    //             // Handle the results here (response.result has the parsed body).
    //             console.log("Response", response);
    //         }, function (error) {
    //             console.error("Execute error", error);
    //         });
    // }

    // getUserCalendars() {
    //     var url = "https://www.googleapis.com/calendar/v3/calendars/" + this.state.calendar.calendarId + '/events';
    //     var options = {
    //         'headers': {
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer ' + this.props.currentUser.services.google.accessToken,
    //             'X-JavaScript-User-Agent': "Google APIs Explorer"
    //         },
    //         'params': {
    //             maxResults: 25
    //         }
    //     };
    //     HTTP.get(url, options, (error, result) => {
    //         if (!error) {
    //             this.setState(() => { return { calendarList: result } });
    //         } else {
    //             error = 'Error getting calendars: ' + error;
    //         }
    //     });
    // }
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
    
    handleClick() {
        console.log("click");
        console.log(this.props);
         var url = "https://www.googleapis.com/calendar/v3/users/me/calendarList";
         var options = {
             'headers': {
                 'Content-Type': 'application/json',
                 'Authorization': 'Bearer ' + this.props.currentUser.services.google.accessToken,
                 'X-JavaScript-User-Agent': "Google APIs Explorer"
             },
             'params': {
                 maxResults: 25
             }
         };
         HTTP.get(url, options, (error, result) => {
             if (!error) {
                 console.log("calendarList" + result);
             } else {
                 error = 'Error getting calendars: ' + error;
             }
        });
    }

    render() {
        return (
            <div>
                <button onClick={()=>{this.handleClick()}}>Agregar evento</button>
            </div>
        );
    }

}
export default EventCreator;
