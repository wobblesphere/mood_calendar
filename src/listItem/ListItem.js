import React, { Component } from 'react';
import './ListItem.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DragSource } from 'react-dnd';

library.add(faTimesCircle);
library.add(faCaretUp);
library.add(faCaretDown);

const itemSource = {
  beginDrag(props) {
    console.log("source --- begin drag")
    return {
      id: props.itemIndex,
      sourceList: props.listName,
    };
  },

  endDrag(props, monitor, component) {
    if(!monitor.didDrop()){
      console.log("source ---end drag");
      return;
    }
    return props.handleDrop(props.itemIndex);
  }
}

function collect(connect, monitor){
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }
}

class ListItem extends Component {
  constructor() {
    super();
    this.shouldHideArrow = true;
    this.state = {
      displayArrows: false,
      displayDeleteButton: false
    }
    this.textAreaReference = React.createRef();
  }

  onArrowMouseDown(e) {
    this.shouldHideArrow = false;
  }

  onArrowMouseUp(e) {
    this.shouldHideArrow = true;
    this.textAreaReference.current.focus();
  }

  renderArrows() {
    if(this.state.displayArrows){
      return(
        <div key="b" className= "arrowButtons">
         <FontAwesomeIcon
            icon='caret-up'
            onClick={this.props.moveUpFunction}
            onMouseDown={(e) => this.onArrowMouseDown(e)}
            onMouseUp={(e) => this.onArrowMouseUp(e)}
         />
         <FontAwesomeIcon
            icon='caret-down'
            onClick={ ()=>this.props.moveDownFunction() }
            onMouseDown={(e) => this.onArrowMouseDown(e)}
            onMouseUp={(e) => this.onArrowMouseUp(e)}
         />
        </div>
      )
    }
  }

  renderDeleteButton() {
    if(this.state.displayDeleteButton){
      return <FontAwesomeIcon icon="times-circle"
                              className={`${this.props.listName}DeleteButton`}
                                key={this.props.itemIndex}/>
    }
  }

  displayArrows(){
    this.setState({
      displayArrows: true
    })
  }

  hideArrows() {
    if (this.shouldHideArrow) {
      this.setState({
        displayArrows: false
      })
    }
  }

  displayDeleteButton(){
    this.setState({
      displayDeleteButton: true
    })
  }

  hideDeleteButton() {
    this.setState({
      displayDeleteButton: false
    })
  }

  renderContent() {
    const newTextarea = (
      <textarea
        onBlur={()=>this.hideArrows()}
        key="a"
        className={this.props.listName}
        ref={this.textAreaReference}>
      </textarea>
    );
    let arrowButtons = this.renderArrows();
    let deleteButton = this.renderDeleteButton();

    return [
      newTextarea,
      arrowButtons,
      deleteButton
    ];
  }

  render() {
    const { isDragging, connectDragSource} = this.props;
    const opacity = isDragging ? 0 : 1;
    return connectDragSource(
      <div className={`${this.props.listName}Div${this.props.itemIndex} ${this.props.listName}s`}
            onMouseEnter={ ()=> this.displayDeleteButton()}
            onMouseLeave={ ()=> this.hideDeleteButton()}
            onClick={()=>this.displayArrows()}
            style = {{opacity}}
            >
        {this.renderContent()}
      </div>
    );
  }

}

export default DragSource('item', itemSource, collect)(ListItem);
