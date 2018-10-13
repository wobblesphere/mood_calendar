import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.js';
import CalendarBoard from './CalendarBoard/CalendarBoard.js';
import PopUpForm from './PopUpForm/PopUpForm.js';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="body">
        <Header />
        <CalendarBoard key="Calendar" />
        <PopUpForm />
      </div>
    );
  }
}


export default App;
