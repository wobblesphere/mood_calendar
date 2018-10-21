import React, { Component } from 'react';
import "./CalendarDay.css";
import { connect } from 'react-redux'
import Actions from '../actions/actions.js';

class CalendarDay extends Component {
  render() {
    return(
      <div className={`day currentMonthDays  ${this.props.startingDayRecord} ${this.props.moods.getIn([this.props.date, 'mood'])}`}
          onClick={()=> this.props.displayForm(this.props.date)}>
      {this.props.day}
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
