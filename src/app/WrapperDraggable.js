import React from "react";
import {render} from "react-dom";
import Draggable from 'react-draggable';
import './Box.css'

export class WrapperDraggable extends React.Component {

handleStart(e, ui){ e.stopPropagation(); }
render(){
return (
        <Draggable
        handle="h3"
        onStart={this.handleStart}
        bounds="parent">
                       <div className={
                           "box "+this.props.count.toString()}
                           style={{width: this.props.width, height: this.props.height, zIndex: this.props.zIdx}
                       }>
                            <h3>Title {this.props.count}</h3>
                            {this.props.children}
                       </div>
        </Draggable>
);
}
}
