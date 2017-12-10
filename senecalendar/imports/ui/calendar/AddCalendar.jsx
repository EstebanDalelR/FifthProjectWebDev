import React, { Component } from 'react';
import { HTTP } from 'meteor/http';
// https://www.npmjs.com/package/react-dates
// https://www.npmjs.com/package/react-datepicker
class AddCalendar extends Component {

  constructor(props){
    super(props);
  }

  renderCalendarPicker(){
    if(Meteor.user().calendar == -1){
      if(this.props.calendarList != ' '){
        var calendarList = this.props.calendarList.data.items;
        return(
          <div className="calendar-picker">
            <h4>A continuación puedes seleccionar un calendario para sincronizar con nuestra App:</h4>
            <div>
              {calendarList.map((d)=>{
                return <button>{d.summary}</button>
              })}
            </div>
          </div>
        );
      }else{
        return <button onClick={()=>{this.props.getUserCalendars()}}>Buscar Calendarios</button>
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
          <h2>Añadir un Calendario:</h2>
          <p>Para añadir un calendario este debe ser público en la página de Google Calendar.</p>
          {(Meteor.user())?this.renderCalendarPicker():<p>Inicia sesión con google para ver más opciones sobre este calendario.</p>}
      </div>
    );
  }
}

export default AddCalendar;
