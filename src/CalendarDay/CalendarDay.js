import React, { Component } from 'react';
import "./CalendarDay.css";
import { connect } from 'react-redux'
import Actions from '../actions/actions.js';

class CalendarDay extends Component {
  hasNote(){
    if((this.props.moods.getIn([this.props.squareID, 'note'])) !== undefined){
      return true
    } 
    return false
  }

  markNoteDaySquare(){
    if(this.hasNote()){
      return <div className="dayNoteMarked"> </div>
    }
    return null
  }

  render() {
    return(
      <div className={`day currentMonthDays  ${this.props.startingDayRecord} ${this.props.moods.getIn([this.props.squareID, 'mood'])}`}
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
