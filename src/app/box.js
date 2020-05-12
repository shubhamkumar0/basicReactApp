import React from "react";
import {render} from "react-dom";
import ReactDOM from "react-dom";
import Draggable from 'react-draggable';
import './Box.css'

var prevProps=null;
var refs=[];


const WrapperDraggable = React.forwardRef((props,ref)=>(
    <Draggable
        handle="h3"
        defaultPosition={{x:props.width,y:props.height-175}}
        onStart={(e,ui)=>e.stopPropagation()}
        bounds="parent"
    >
            <div className={"box "+props.count.toString()}
                style={{width: props.width, height: props.height, zIndex: props.zIdx}}
                id={"portal"+(props.count-1).toString()}>
                <h3>Title {props.count}</h3>
                <p className={"outer"} ref={ref} style={{height:props.height+53}}></p>
            </div>
    </Draggable>
));

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
            var newDom = <WrapperDraggable count={count} zIdx={zIdx} width={count*175} height={count*175} ref={this.myRef}/>
            refs[this.state.count-1]=this.myRef.current;
            this.setState({boxes:[newDom].concat(this.state.boxes)})
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