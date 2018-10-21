import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.js';
import CalendarBoard from './CalendarBoard/CalendarBoard.js';
import PopUpForm from './PopUpForm/PopUpForm.js';
import CalendarLegend from "./CalendarLegend/CalendarLegend.js";
import { connect } from 'react-redux'


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
}

function mapStateToProps(state) {
  return {
    isPopUpShown: state.get("isPopUpShown"),
  };
}


export default connect(
  mapStateToProps
)(App)
