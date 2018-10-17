import React, { Component } from 'react';
import "./PopUpForm.css";
import { connect } from 'react-redux'
import Constants from '../constants.js'
import Actions from '../actions/actions.js';


class PopUpForm extends Component {
  constructor(){
    super();
    this.state = {
      mood: 'none',
    }
  }

  handleCheckClick(mood){
    // if(this.state.mood === mood) {
    //   this.setState = ({
    //     mood: 'none',
    //   })
    // } else {
      this.setState({
        mood: mood,
      })
    // }
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
        <h2 key="formHeader">Rate your day on <span>{this.props.squareID}</span> : </h2>
        {this.createMoodList()}
        <button className="moodFormSubmit"
                key="submitButton"
                onClick={()=> this.props.update_Mood(this.state.mood,this.props.squareID)}
               > Submit </button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    squareID: state.get("clickedDay"),
  }
}

function mapDispatchToProps(dispatch){
  return {
    update_Mood: (mood, squareID) => {
      dispatch(Actions.update_Mood(mood, squareID))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopUpForm)
