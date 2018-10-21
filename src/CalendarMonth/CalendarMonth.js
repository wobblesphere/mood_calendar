import React, { Component } from 'react';
import Constants from '../constants.js';
import Utils from '../utils.js';
import "./CalendarMonth.css";
import CalendarDay from "../CalendarDay/CalendarDay.js";

class CalendarMonth extends Component {
  //sunday=0, monday=1, tuesday=2...

  renderCalendarSquares(month) {
    //Create all the squares on the calendar
    var squares = [];
    let startingDay = Utils.monthStartingDay(this.props.month);
    let startingDayRecord = startingDay;
    const monthTotalDays = Constants.monthDaysDict[month];
    const previousMonthTotalDay = Constants.monthDaysDict[Constants.months[(Constants.months.indexOf(month))-1]];
    //previous month days to fill in the squares before the first day of the month

    if(startingDay!== 7){
      if(month === "Jan"){
        for(let i = 0; i < startingDay; i++){
          squares.push(
            <div className="day JanRefDays " key={"refDay" + i}>
                0
            </div>
          )
        }
      } else {
        for(let i = (previousMonthTotalDay - startingDay + 1); i < previousMonthTotalDay+1; i++){
          squares.push(
            <div className="day refDays " key={"refDay" + i}>
                {i}
            </div>
          )
        }
      }
    }
    

    //current month's days
    for(let i = 1; i < monthTotalDays+1; i++){
      if(startingDayRecord === 7){
        startingDayRecord = 0;
      }
      squares.push(
        <CalendarDay
              day={i}
              date={this.props.month + i}
              startingDayRecord={startingDayRecord}
              key={i} />
      )
      startingDay++;
      startingDayRecord++;
    }

    //next month's days to fill in the rest of the squares
    let j = 1;
    for(let i = squares.length; i < 35; i++){
      squares.push(
        <div className="day refDays" key={"refDay" + i}>
          {j}
        </div>
      )
      j++;
    }

    return squares;
  }

    render() {
      return this.renderCalendarSquares(this.props.month);
    }
}
export default CalendarMonth;
