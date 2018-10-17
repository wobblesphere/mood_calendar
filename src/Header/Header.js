import React, { Component } from 'react';
import './Header.css';
import YearSelectionMenu from "../YearSelectionMenu/YearSelectionMenu.js";
import { connect } from 'react-redux';
import Actions from '../actions/actions.js';
import Constants from '../constants.js';

class Header extends Component {
  changeHeader__Month(month){
    this.props.changeMonth(month);
  }

  isActive(month){
    if(this.props.currentMonth === month){
      return "active"
    }
    return null
  }

  renderTopBarMenu() {
    let topBarMenu = [];
    const yearMenu = <YearSelectionMenu key="yearSelectionMenu"/>;
    topBarMenu.push(yearMenu);

    for(let month of Constants.months) {
      topBarMenu.push(
        <div
          className={month + " topBarMenu_item " + this.isActive(month)}
          key={month}
          onClick={()=>this.changeHeader__Month(month)}>
          {month}
        </div>
      )
    }
    return topBarMenu;
  }

  render() {
    return(
      <div className="topBar">
        <div className="month_menu">
          {this.renderTopBarMenu()}
        </div>

       <div className="month_Header">
          {this.props.currentMonth}
       </div>
      </div>
  )}
}

function mapStateToProps(state) {
  return {
    currentMonth: state.get("currentMonth")
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeMonth: (month) => dispatch(Actions.changeMonthHeader(month))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
