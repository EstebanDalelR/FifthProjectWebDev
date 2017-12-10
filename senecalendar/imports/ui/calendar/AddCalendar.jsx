import React, { Component } from 'react';
import { HTTP } from 'meteor/http';
// https://www.npmjs.com/package/react-dates
// https://www.npmjs.com/package/react-datepicker
class AddCalendar extends Component {

  constructor(props){
    super(props);
    this.state = {calendarList:undefined};
  }

  renderCalendarPicker(){
    if(Meteor.user().calendarId == 'b6d4f2lpee67ih3q0a4k37cvb0@group.calendar.google.com'){
      if(this.props.calendarList != ' '){
        var calendarList = this.props.calendarList.data.items;
        return(
          <div className="calendar-picker">
            <h4>A continuación puedes seleccionar un calendario para sincronizar con nuestra App:</h4>
            <div>
              {calendarList.map((d, i)=>{
                return <button key={i} onClick={()=>{this.props.selectCalendar(d)}}>{d.summary}</button>
              })}
            </div>
          </div>
        );
      }else{
        return <button onClick={()=>{this.props.getUserCalendars()}}>Buscar Calendarios</button>
      }
    }else{
      var calendarName = (Meteor.user().calendarData)?Meteor.user().calendarData.summary:'Tu calendario no tiene nombre';
      return(
        <div className="calendar-picker">
          <p>Este es tu calendario actual:</p>
          <h4>{calendarName}</h4>
          <p>Para desvincular este calendario haz click aquí</p>
          <button onClick={()=>{this.props.removeCalendar()}}>Desvincular</button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="container">
          <h2>Añadir un Calendario:</h2>
          <p>Para añadir un calendario este debe ser público en la página de Google Calendar.</p>
          {(Meteor.user())?this.renderCalendarPicker():<p>Inicia sesión con google para ver más opciones sobre este calendario.</p>}
      </div>
    );
  }
}

export default AddCalendar;
