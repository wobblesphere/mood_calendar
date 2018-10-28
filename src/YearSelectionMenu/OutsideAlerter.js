import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../actions/actions.js';
import "./YearSelectionMenu.css";


class OutsideAlerter extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if(event.target.className === 'page-mask'){
        this.props.hidePopUp();
      }
      this.props.toggleYearMenu(false);
    }
  }

  render() {
    return <div ref={this.setWrapperRef}>{this.props.children}</div>;
  }
}

function mapStateToProps(state){
  return{}
}

function mapDispatchToProps(dispatch){
  return {
    toggleYearMenu: (toggle) => {
      dispatch(Actions.toggleYearMenu(toggle))
    },
    hidePopUp: () => {dispatch(Actions.hidePopUp())}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OutsideAlerter)
