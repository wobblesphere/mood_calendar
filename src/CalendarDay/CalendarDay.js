import React, { Component } from 'react';
import "./CalendarDay.css";
import { connect } from 'react-redux'
import Actions from '../actions/actions.js';
import Utils from '../utils.js';


class CalendarDay extends Component {
  hasNote(){
    const dayNote = this.getDayInfo('note');
    if(dayNote){
      return true
    } 
    return false
  }

  markNoteDaySquare(){
    if(this.hasNote()){
      return <div className={`dayNoteMarked ${this.getDayInfo("mood")}Marked`}> </div>
    }
    return null
  }

  getDayInfo(info){
    return Utils.getDayInfo(this.props.moods, this.props.squareID, info);
  }

  isCurrentDate(squareID){
    const currentDate = this.props.currentMonth + this.props.currentDay;
    if(squareID === currentDate){
      return "currentDate"
    } 
  }

  render() {
    return(
      <div className={`day currentMonthDays  ${this.props.startingDayRecord} 
                    ${this.getDayInfo('mood')} ${this.isCurrentDate(this.props.squareID)}`}
          onClick={()=> this.props.displayForm(this.props.squareID)}>
      {this.props.day}
      {this.markNoteDaySquare()}
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    moods: state.get("year2018Moods"),
    currentDay: state.get('currentDate')['day'],
    currentMonth: state.get('currentDate')['month'],
    currentYear: state.get('currentDate')['year'],
  }
}

const mapDispatchToProps = dispatch => {
   return {
     displayForm: (squareID) => {dispatch(Actions.showPopUP(squareID))},
   };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CalendarDay)
