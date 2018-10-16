import React, { Component } from 'react';
import "./CalendarDay.css";
import { connect } from 'react-redux'


class CalendarDay extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     mood: "none",
  //   }
  // }
  //
  // changeSquareColor(mood){
  //   this.setState({
  //     mood: mood,
  //   })
  // }

  displayPopUp(){
    this.props.displayForm();
  }

  render() {
    return(
      <div className={"day "+ this.props.startingDayRecord+ " " + this.props.mood}
          onClick={()=>{
            // this.changeSquareColor(this.props.mood);
            this.displayPopUp()}}>
      {this.props.day}
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    mood: state.mood,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    displayForm: ()=> {
      dispatch({
        type: 'SHOW_POP_UP',
        data: true,
      })
    }
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CalendarDay)
