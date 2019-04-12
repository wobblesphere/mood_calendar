import React, { Component } from 'react';
import "./CalendarLegend.css";
import { connect } from 'react-redux';
import Constants from '../constants.js';

class CalendarLegend extends Component{
  calculateMoodCounts(mood){
    let monthTotalDays = Constants.monthDaysDict[this.props.currentActiveMonth];
    let moodCounts = (this.props.currentMonthMoods)? this.props.currentMonthMoods[mood] : 0;
    let percentage = Math.round((moodCounts/monthTotalDays)*100);
    if(!percentage){
      return 0;
    }
    return percentage;
  }

  render(){
    return (
      <div className="CalendarLegend">
          <div className="legend_Fantastic legend_Mood">
            Fantastic
            <div className="ratings fantasticRating">
              {`${this.calculateMoodCounts('fantastic')}%`}
            </div>
          </div>

          <div className="legend_Good legend_Mood">
            Good
            <div className="ratings goodRating">
              {`${this.calculateMoodCounts('good')}%`}
            </div>
          </div>

          <div className="legend_Ok legend_Mood">
            OK
            <div className="ratings okRating">
              {`${this.calculateMoodCounts('ok')}%`}
            </div>
          </div>

          <div className="legend_Meh legend_Mood">
            Meh
            <div className="ratings mehRating">
              {`${this.calculateMoodCounts('meh')}%`}
            </div>
          </div>

          <div className="legend_Bad legend_Mood">
            Bad
            <div className="ratings sbadRating">
              {`${this.calculateMoodCounts('bad')}%`}
            </div>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  let currentActiveMonth = state.get('currentMonth');
  return{
    currentActiveMonth,
    currentMonthMoods: state.get('moodCounts')[currentActiveMonth],
  }
}


export default connect(
  mapStateToProps,
)(CalendarLegend);
