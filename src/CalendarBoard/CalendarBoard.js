import React, { Component } from 'react';
import { connect } from 'react-redux'
import './CalendarBoard.css';
import CalendarMonth from '../CalendarMonth/CalendarMonth.js';

class CalendarBoard extends Component{
  renderCalendarMonToSun() {
    return (
      <div className="MondayToSunday" key="MondayToSunday">
        <p key="Sunday"> Sunday </p>
        <p key="Monday"> Monday </p>
        <p key="Tuesday"> Tuesday </p>
        <p key="Wednesday"> Wednesday </p>
        <p key="Thursday"> Thursday </p>
        <p key="Friday"> Friday </p>
        <p key="Saturday"> Saturday </p>
      </div>
    )
  }

  render() {
    return (
      <div className="board">
        {this.renderCalendarMonToSun()}
        <CalendarMonth month={this.props.currentMonth} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentMonth: state.get("currentMonth")
  }
}

export default connect(
  mapStateToProps
)(CalendarBoard)
