import React, { Component } from 'react';
import "./PopUpForm.css";
import { connect } from 'react-redux'
import Constants from '../constants.js'

class PopUpForm extends Component {
  constructor(){
    super();
    this.state = {
      isChecked: false,
    }
  }

  handleCheckClick(mood){
    console.log(mood)
  }

  createMoodList(){
    const moodList = Constants.moods.map((item)=>
        <div className={item.type + " mood"} key={item.type+"mood"}>
          <input type="checkbox" onChange={()=>this.handleCheckClick(item.type)} />
          {item.text}
        </div>
    )
    return (
      <div className="moodSelection" key="moodSelections">
        {moodList}
      </div>
    )
  }

  render(){
    return (
      <div className="moodForm" key="moodForm">
        <h2 Key="formHeader">Rate your day: </h2>
        {this.createMoodList()}
        <button className="moodFormSubmit" key="submitButton" > Submit </button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    mood: state.mood
  }
}

function mapDispatchToProps(dispatch){
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopUpForm)
