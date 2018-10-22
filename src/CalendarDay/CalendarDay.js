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
    return Utils.CalendarDay_getDayInfo(this.props.moods, this.props.squareID, info);
  }

  render() {
    return(
      <div className={`day currentMonthDays  ${this.props.startingDayRecord} 
                    ${this.getDayInfo('mood')}`}
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
