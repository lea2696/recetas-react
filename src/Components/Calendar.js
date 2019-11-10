import React from "react";
import { calendarDays, calendarName } from "../helpers/Calendar-data";
import Day from "./Day";

export default class Calendar extends React.Component {
  state = {
    date: {}
  };
  componentDidMount() {
    this.goToCurrentMonth();
  }
  getCalendar = () => {
    let CurrentMonth = [];
    CurrentMonth = this.fillCalendar(
      this.state.date.dayStart,
      this.state.date.days
    );
    return (
      <table>
        <thead>
          <tr>
            <th>DOM</th>
            <th>LUN</th>
            <th>MAR</th>
            <th>MIE</th>
            <th>JUE</th>
            <th>VIE</th>
            <th>SAB</th>
          </tr>
        </thead>
        <tbody>
          {Array(5)
            .fill(1)
            .map((Row, indexRow) => (
              <tr>
                {Array(7)
                  .fill(1)
                  .map((element, indexElement) => (
                    <Day day={CurrentMonth[indexElement + indexRow * 7]} />
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    );
  };

  fillCalendar = (dayStart, dayOfMonth) => {
    const month = [];
    if (dayStart === 0) {
      for (let i = 0; i < dayOfMonth; i++) {
        month.push(i + 1);
      }
      for (let j = 0; j < 35 - dayOfMonth; j++) {
        month.push(false);
      }
    } else {
      for (let i = 0; i < dayStart; i++) {
        month.push(false);
      }
      for (let j = 0; j < dayOfMonth; j++) {
        month.push(j + 1);
      }
      for (let z = 0; z < 35 - dayOfMonth - dayStart; z++) {
        month.push(false);
      }
    }
    return month;
  };

  goToNextMonth = () => {
    let newMonth = this.state.date.numberOfMonth + 1;
    let newYear = this.state.date.numberOfYear;
    if (newMonth > 11) {
      newMonth = 0;
      newYear = newYear + 1;
    }
    const newDate = new Date(newYear, newMonth, 1);
    let firstDay = newDate.getDay();
    let daysOfTheMonth = calendarDays[newMonth];
    if (daysOfTheMonth === 28) {
      daysOfTheMonth = newYear % 4 === 0 ? 29 : 28;
    }
    let name = calendarName[newMonth];

    let date = {
      days: daysOfTheMonth,
      dayStart: firstDay,
      numberOfMonth: newMonth,
      numberOfYear: newYear,
      name
    };
    this.setState({
      date
    });
  };
  goToPreviousMonth = () => {
    let newMonth = this.state.date.numberOfMonth - 1;
    let newYear = this.state.date.numberOfYear;
    if (newMonth < 0) {
      newMonth = 11;
      newYear = newYear - 1;
    }
    const newDate = new Date(newYear, newMonth, 1);
    let firstDay = newDate.getDay();
    let daysOfTheMonth = calendarDays[newMonth];
    if (daysOfTheMonth === 28) {
      daysOfTheMonth = newYear % 4 === 0 ? 29 : 28;
    }
    let name = calendarName[newMonth];

    let date = {
      days: daysOfTheMonth,
      dayStart: firstDay,
      numberOfMonth: newMonth,
      numberOfYear: newYear,
      name
    };
    this.setState({
      date
    });
  };
  goToCurrentMonth = () => {
    const date = new Date();
    let newMonth = date.getMonth();
    let newYear = date.getFullYear();
    const newDate = new Date(newYear, newMonth, 1);
    let firstDay = newDate.getDay();
    let daysOfTheMonth = calendarDays[newMonth];
    if (daysOfTheMonth === 28) {
      daysOfTheMonth = newYear % 4 === 0 ? 29 : 28;
    }
    let name = calendarName[newMonth];

    let currentDate = {
      days: daysOfTheMonth,
      dayStart: firstDay,
      numberOfMonth: newMonth,
      numberOfYear: newYear,
      name
    };
    this.setState({
      date: currentDate
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.date.name}</h2>
        {this.getCalendar()}
        <button onClick={this.goToPreviousMonth}>Mes Anterior</button>
        <button onClick={this.goToCurrentMonth}>Mes Actual</button>
        <button onClick={this.goToNextMonth}>Mes Siguiente</button>
      </div>
    );
  }
}
