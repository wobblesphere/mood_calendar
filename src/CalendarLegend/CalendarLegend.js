import React, { Component } from 'react';
import "./CalendarLegend.css";

class CalendarLegend extends Component{
  render(){
    return (
      <div className="CalendarLegend">
          <div className="legend_Fantastic legend_Mood">Fantastic</div>

          <div className="legend_Good legend_Mood">Good</div>

          <div className="legend_Ok legend_Mood">OK</div>

          <div className="legend_Meh legend_Mood">Meh</div>

          <div className="legend_Bad legend_Mood">Bad</div>
      </div>
    )
  }
}

export default CalendarLegend
