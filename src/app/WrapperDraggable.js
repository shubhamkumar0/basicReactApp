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
                <Draggable
                    handle="h3"
                    defaultPosition={{x:this.props.width,y:this.props.height-175}}
                    onStart={this.handleStart}
                    bounds="parent"
                    ref={this.myRef}
                >
                        <div className={"box "+this.props.count.toString()}
                            style={{width: this.props.width, height: this.props.height, zIndex: this.props.zIdx}}
                            id={"portal"+(this.props.count-1).toString()}>
                            <h3>Title {this.props.count}</h3>
                            {this.props.children}
                        </div>
                </Draggable>
        );
    }
}
