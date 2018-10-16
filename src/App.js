import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.js';
import CalendarBoard from './CalendarBoard/CalendarBoard.js';
import PopUpForm from './PopUpForm/PopUpForm.js';
import { connect } from 'react-redux'


class App extends Component {
  renderForm(){
    if(this.props.isPopUpShown){
      return <PopUpForm />
    }
  }

  render() {
    return (
      <div className="body">
        <Header/>
        <CalendarBoard />
        {this.renderForm()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isPopUpShown: state.isPopUpShown,
  };
}


export default connect(
  mapStateToProps
)(App)
