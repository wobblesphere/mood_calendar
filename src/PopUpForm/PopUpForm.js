import React, { Component } from 'react';
import "./PopUpForm.css";

class PopUpForm extends Component {
  render(){
    return (
      <div className="moodForm">
        <h2>Rate your day: </h2>
        <div className="moodSelection">
          <div className="Fantastic mood"><input type="checkbox" value="Fantastic!"/>Fantastic!</div>
          <div className="Good mood"><input type="checkbox" value="Good"/>Good</div>
          <div className="OK mood"><input type="checkbox" value="OK"/>Just OK</div>
          <div className="Meh mood"><input type="checkbox" value="Meh"/>Meh, could be better</div>
          <div className="Bad mood"><input type="checkbox" value="Bad"/>Bad</div>
          <button className="moodFormSubmit" type="submit"> Submit </button>
        </div>
      </div>
    )
  }
}

export default PopUpForm;
