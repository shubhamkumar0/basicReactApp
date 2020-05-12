import React from "react";
import {render} from "react-dom";
import ReactDOM from "react-dom";
import Draggable from 'react-draggable';
import './Box.css'
import {WrapperDraggable} from "./WrapperDraggable.js";

var prevProps=null;
var refs=[];

export class Box extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            count:0,
            boxes:[]
        };
        this.myRef = React.createRef();
    }

    addElement=(count,zIdx) => {
            var newDom = <WrapperDraggable count={count} zIdx={zIdx} width={count*175} height={count*175} innerRef={this.myRef}/>
            refs[this.state.count-1]=this.myRef.current;
            this.setState({
                boxes:[newDom].concat(this.state.boxes)
            })
    }

    IncreaseCountOnButtonClick=()=>{
        this.setState(
            {
                count: this.state.count+1
            }
        )
    }

    componentDidUpdate(){
        if(this.state.count!=prevProps){
            prevProps=this.state.count;
            this.addElement(this.state.count,this.state.count-1);
        }
    }

    render(){
        return (
            <div>
                <Draggable>
                    <button onClick={this.IncreaseCountOnButtonClick}>Add Parent</button>
                </Draggable>
                <div style={{width:"100vw",height:"200vh"}} id={"portal"+(this.state.count)}>
                    {this.state.boxes.map((box,index)=>{
                        if(index==0){
                            return ReactDOM.createPortal(box,
                                document.getElementById("portal"+(this.state.boxes.length-index).toString()))
                        } else {
                            return ReactDOM.createPortal(box, refs[index])
                        }
                    })}
                </div>
            </div>
        );
    }
}