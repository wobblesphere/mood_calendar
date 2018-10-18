import React, { Component } from 'react';
import "./PopUpForm.css";
import { connect } from 'react-redux'
import Constants from '../constants.js'
import Actions from '../actions/actions.js';


class PopUpForm extends Component {
  createMoodList(){
    const moodList = Constants.moods.map((item)=>
        <div className={item.type + " mood"}
              key={item.type+"mood"}
              onClick={()=>this.props.update_Mood(item.type,this.props.squareID)}>
            {item.text}
        </div>
    )

    //clear mood Button
    moodList.push(
      <div className={"clear mood"}
            key="clear"
            onClick={()=>this.props.update_Mood(null,this.props.squareID)}>
            clear mood
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

  render(){
    return (
      <div className="moodForm" key="moodForm">
        {this.renderDeleteButton()}
        <h2 key="formHeader">Rate your day on <span>{this.props.squareID}</span> : </h2>
        {this.createMoodList()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    squareID: state.get("clickedDay"),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    update_Mood: (mood, squareID) => {
      dispatch(Actions.update_Mood(mood, squareID))
    },
    hidePopUp: () => {dispatch(Actions.hidePopUp())},
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopUpForm)
