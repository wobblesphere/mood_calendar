import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.js';
import CalendarBoard from './CalendarBoard/CalendarBoard.js';
import PopUpForm from './PopUpForm/PopUpForm.js';
import CalendarLegend from "./CalendarLegend/CalendarLegend.js";
import { connect } from 'react-redux'
import axios from 'axios';
import Actions from './actions/actions.js';


class App extends Component {
  renderForm(){
    if(this.props.isPopUpShown){
      return (
        <div>
          <PopUpForm />
          <div className="page-mask"></div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="body">
        <Header/>
        <CalendarBoard />
        {this.renderForm()}
        <CalendarLegend />
      </div>
    );
  }

  updateMood(response){
    this.props.update_Mood({
      mood: response.data.mood, 
      squareID: response.data.squareID, 
      note: response.data.note
    });
  }

  getSubmittedMood() {
    //get from server
    const getDataRequest = axios.get('http://127.0.0.1:5000/get_mood');
    getDataRequest
      .then((response) => {
        this.updateMood(response)
      })
      .catch((error) => {
        console.log(error);
      });
  }


  componentDidMount(){
    this.getSubmittedMood();
  }

}


function mapStateToProps(state) {
  return {
    isPopUpShown: state.get("isPopUpShown"),
  };
}

const mapDispatchToProps = dispatch => {
  return {
    update_Mood: ({mood, squareID, note}) => {
      dispatch(Actions.update_Mood({mood, squareID, note}))
    },
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
