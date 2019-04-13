import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.js';
import CalendarBoard from './CalendarBoard/CalendarBoard.js';
import PopUpForm from './PopUpForm/PopUpForm.js';
import CalendarLegend from "./CalendarLegend/CalendarLegend.js";
import { connect } from 'react-redux'
import Actions from './actions/actions.js';


class App extends Component {
  renderForm(){
    if (!this.props.isPopUpShown) {
      return null
    }
    return (
      <div>
        <PopUpForm />
        <div className="page-mask"></div>
      </div>
    )
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
  

  componentDidMount(){
    // window.localStorage.clear();
    const moodDictProtocol = {
      "Jan": {},"Feb": {},"Mar": {},"Apr": {},
      "May": {},"Jun": {},"Jul": {},"Aug": {},
      "Sep": {},"Oct": {},"Nov": {},"Dec": {},
    };
    const MoodsCollection = window.localStorage.getItem("moodsCollection");
    const MoodCounts = window.localStorage.getItem("moodCounts");

    if (MoodsCollection === null) {
      const MoodsCollectionOf2018 = moodDictProtocol;
      window.localStorage.setItem("moodsCollection", JSON.stringify(MoodsCollectionOf2018));
    }

    if (MoodCounts === null) {
      const MoodCounts = moodDictProtocol;
      window.localStorage.setItem("moodCounts", JSON.stringify(MoodCounts));
    }

    this.props.appMounted();
  }
}


function mapStateToProps(state) {
  return {
    isPopUpShown: state.get("isPopUpShown"),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    appMounted: () => dispatch(Actions.appMounted())
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
