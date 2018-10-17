import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';
import Actions from '../actions/actions.js';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      displayYearMenu: false,
    }
  }

  changeHeader__Month(month){
    this.props.changeMonth(month);
  }

  displayYearMenuFunction(){
    this.setState({
      displayYearMenu: !this.state.displayYearMenu,
    })
  }

  isActive(month){
    if(this.props.currentMonth === month){
      return "active"
    }
    return null
  }

  _onMouseMove(e){
    console.log("mousemove");
    console.log('x', e.screenX, 'y', e.screenY);
  }

  renderYearMenu() {
    if(this.state.displayYearMenu){
      return (
        <div className="dropDownMenu" key="topBarMenu_item_year">
          <div key="2019"
              className="selectValue"
              value="2019"
              onClick={()=>this.displayYearMenuFunction()}>2019</div>
          <div key="2018"
                className="selectValue"
                value="2018"
                onClick={()=>this.displayYearMenuFunction()}>2018</div>
          <div key="2017"
                className="selectValue"
                value="2017"
                onClick={()=>this.displayYearMenuFunction()}>2017</div>
        </div>
      )
    }
  }

  renderTopBarMenu() {
    let topBarMenu = [];
    const menu = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const yearMenu = (
                  <div key="yearSelect" className="yearSelect">
                    <button key="dropbtn"
                            className="dropbtn"
                            onClick={()=>this.displayYearMenuFunction()}
                            onMouseMove={this._onMouseMove(this)}>Select Year
                    </button>
                      {this.renderYearMenu()}
                  </div>
    );
    topBarMenu.push(yearMenu);

    for(let month of menu) {
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
