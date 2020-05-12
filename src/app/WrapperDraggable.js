import React from "react";
import {render} from "react-dom";
import Draggable from 'react-draggable';
import './Box.css';

export class WrapperDraggable extends React.Component {

    render(){
        return (
            <Draggable
                handle="h3"
                defaultPosition={{x:this.props.width,y:this.props.height-175}}
                onStart={(e,ui)=>e.stopPropagation()}
                bounds="parent"
            >
                <div className={"box "+this.props.count.toString()}
                    style={{width: this.props.width, height: this.props.height, zIndex: this.props.zIdx}}
                    id={"portal"+(this.props.count-1).toString()}
                >
                    <h3>Title {this.props.count}</h3>
                    <p
                        className={"outer"} ref={this.props.innerRef}
                        style={{height:this.props.height+53}}
                    />
                </div>
            </Draggable>
        );
    }
}