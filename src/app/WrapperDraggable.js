import React from "react";
import {render} from "react-dom";
import Draggable from 'react-draggable';
import './Box.css'

export class WrapperDraggable extends React.Component {

    //to handle draggable object moving independently
    handleStart(e, ui){ e.stopPropagation(); }

    //adding a default width,height of 175px to restrict objects movement
    render(){
        return (
            <div style={{width:this.props.width+175, height:this.props.height+175+53}} className="outer">
                <Draggable
                    handle="h3"
                    onStart={this.handleStart}
                    bounds="parent">
                        <div className={"box "+this.props.count.toString()}
                            style={{width: this.props.width, height: this.props.height, zIndex: this.props.zIdx}}
                        >
                            <h3>Title {this.props.count}</h3>
                            {this.props.children}
                        </div>
                </Draggable>
            </div>
        );
    }
}
