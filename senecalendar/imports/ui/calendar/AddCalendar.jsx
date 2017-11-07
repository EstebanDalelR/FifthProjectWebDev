import React, { Component } from 'react';
// https://www.npmjs.com/package/react-dates
// https://www.npmjs.com/package/react-datepicker
class AddCalendar extends Component {

  render() {
    return (
      <div>
        <form>
          Nuevo Evento
          <input type="date" name="bday"></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }

}

export default AddCalendar;
