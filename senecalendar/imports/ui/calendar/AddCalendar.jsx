import React, { Component } from 'react';
import { HTTP } from 'meteor/http';
// https://www.npmjs.com/package/react-dates
// https://www.npmjs.com/package/react-datepicker
class AddCalendar extends Component {

  constructor(props){
    super(props);
    this.state = {calendarList:undefined};
  }

  getUserCalendars(){
    var url = "https://www.googleapis.com/calendar/v3/users/me/calendarList";
    var options = {
      'headers' : {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + Meteor.user().services.google.accessToken,
        'X-JavaScript-User-Agent': "Google APIs Explorer"
      },
      'params' : {
        maxResults : 25
      }
    };
    var calendarList = HTTP.get(url, options, (error, result)=>{
      console.log('error: ', error);
      console.log('result: ', result);
      if(!error){
        return result;
      }else{
        return 'Error getting calendars: '+error;
      }
    });
    this.state.calendarList = calendarList;
  }

  componentWillUpdate(){
    if(Meteor.user().calendar == -1){
      this.getUserCalendars();
    }
  }

  renderCalendarPicker(){
    if(Meteor.user().calendar == -1){
      if(this.state.calendarList){
        var calendarList = this.state.calendarList.data.items;
        var nameList = calendarList.map((d)=>{
          return d.resume;
        })
        return(
          <div className="calendar-picker">
            <h4>A continuación puedes seleccionar un calendario para sincronizar con nuestra App:</h4>
            <div>
              {nameList.map((d)=>{
                return <p>{d}</p>
              })}
            </div>
          </div>
        );
      }
    }else{
      return(
        <div className="calendar-picker">
          <p>Este es tu calendario actual:</p>
          <h4>{Meteor.user().calendar}</h4>
          <p>Para desvincular este calendario haz click aquí</p>
          <button>Desvincular</button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="container">
        <form>
          <h2>Añadir un Calendario:</h2>
          <p>Para añadir un calendario este debe ser público en la página de Google Calendar.</p>
          {(Meteor.user())?this.renderCalendarPicker():<p>Inicia sesión con google para ver más opciones sobre este calendario.</p>}
        </form>
      </div>
    );
  }
}

export default AddCalendar;
