import React, { Component } from 'react';
import "./CalendarDay.css";
import { connect } from 'react-redux'
import Actions from '../actions/actions.js';

class CalendarDay extends Component {

  render() {
    return(
      <div className={"day currentMonthDays "+ this.props.startingDayRecord+ " " + this.props.mood.get(this.props.id)}
            id={this.props.month + this.props.day}
          onClick={()=> this.props.displayForm(this.props.id)}>
      {this.props.day}
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    mood: state.get("year2018Mood"),
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
