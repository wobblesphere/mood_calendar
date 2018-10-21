import React, { Component } from 'react';
import "./YearSelectionMenu.css";
import Constants from "../constants.js";
import OutsideAlerter from "./OutsideAlerter.js";
import { connect } from 'react-redux';
import Actions from '../actions/actions.js';

class YearSelectionMenu extends Component {
  renderYearMenu() {
    if (this.props.displayYearMenu){
      let yearMenu = [];

      for (let year of Constants.Years){
        yearMenu.push(
          <div key={year} className="year" onClick={()=>this.props.toggleYearMenu(!this.props.displayYearMenu)}>
            {year}
          </div>
        )
      }

      return (
        <div className="dropDownMenu" key="topBarMenu_item_year">
          {yearMenu}
        </div>
      );
    }
    return null;
  }

  render(){
    return(
      <OutsideAlerter>
        <div key="yearSelect" className="yearMenu">
          <button key="dropbtn" className="dropbtn"
                  onClick={()=>this.props.toggleYearMenu(!this.props.displayYearMenu)}
                  >Select Year
          </button>
          {this.renderYearMenu()}
        </div>
      </ OutsideAlerter>
    )
  }
}

function mapStateToProps(state){
  return{
    displayYearMenu: state.get("displayYearMenu"),
  }
}

function mapDispatchToProps(dispatch){
  return {
    toggleYearMenu: (toggle) => {
      dispatch(Actions.toggleYearMenu(toggle))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YearSelectionMenu)
