import React, { Component } from 'react';
import "./YearSelectionMenu.css";

class YearSelectionMenu extends Component{
  constructor() {
    super();
    this.state = {
      displayYearMenu: false,
    }
  }
  
  displayYearMenuFunction(){
    this.setState({
      displayYearMenu: !this.state.displayYearMenu,
    })
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

  render(){
    return(

    )
  }
}
