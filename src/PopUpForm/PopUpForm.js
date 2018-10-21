import React, { Component } from 'react';
import "./PopUpForm.css";
import { connect } from 'react-redux'
import Constants from '../constants.js'
import Actions from '../actions/actions.js';


class PopUpForm extends Component {
  constructor(){
    super();
    this.state = {
      note: "",
      selectedMood: null,
    }
  }

  isChosenMood(mood) {
    return this.props.squareMood === mood;
  }

  isSelected(mood) {
    return this.state.selectedMood === mood;
  }

  isHighlighted(mood) {
    if (this.state.selectedMood) {
      return this.isSelected(mood);
    }
    return this.isChosenMood(mood);
  }

  moodClicked(mood){
    this.setState({
      selectedMood: mood,
    })
  }

  createMoodList(){
    const moodList = Constants.moods.map((item)=>
        <div className={item.type + "Mood formMoods " + (this.isHighlighted(item.type)? item.type+"MoodSelected" : null)}
              key={item.type+"mood"}
              onClick={()=>this.moodClicked(item.type)}
              >
            {item.text}
        </div>
    )

    return (
      <div className="moodSelection" key="moodSelections">
        {moodList}
      </div>
    )
  }

  renderDeleteButton(){
    return(
      <div className="deleteButton" onClick={()=>this.props.hidePopUp()}>
        x
      </div>
    )
  }

  // renderClearButton(){
  //   return(
  //     <div className="clear formMoods"
  //       key="clear"
  //       onClick={()=>this.props.update_Mood(null,this.props.squareID)}>
  //       clear mood
  //     </div>
  //   )
  // }

  renderClearAndSubmitButtons(){
    return(
      <div>
        <div className="clear"
          key="clear"
          onClick={()=>this.props.update_Mood({
            mood: null,
            squareID: this.props.squareID
          })}>
          clear mood
        </div>
        <button className="moodFormSubmit" 
                onClick={()=>this.props.update_Mood({
                  mood: this.state.selectedMood,
                  squareID: this.props.squareID,
                  note: this.state.text
                })}>
                Submit
        </button>
      </div>
    )
  }

  onNoteChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  renderMoodNote(){
    return(
      <div className="moodNoteDiv">
        <textarea className="moodNote" 
                   maxLength="300" 
                  onChange={(e)=>this.onNoteChange(e)}>
        </textarea>
        <div className="maxCharacterNote">max characters: {300 - this.state.text.length} </div>
      </div>
    )
  }

  render(){
    return (
      <div className="moodForm" key="moodForm">
        <h2 key="formHeader">Rate your day on <div className="formDate">{this.props.squareID}</div> : </h2>
        {this.createMoodList()}
        {this.renderMoodNote()}
        {this.renderDeleteButton()}
        {this.renderClearAndSubmitButtons()}
      </div>
    )
  }
}

function mapStateToProps(state){
  const squareID = state.get("clickedDay");
  return{
    squareID,
    squareMood: state.get("year2018Moods").get(squareID),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    update_Mood: ({mood, squareID, note}) => {
      dispatch(Actions.update_Mood({mood, squareID, note}))
    },
    hidePopUp: () => {dispatch(Actions.hidePopUp())},
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopUpForm)
