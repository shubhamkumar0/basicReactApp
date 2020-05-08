import React from "react";
import {render} from "react-dom";
import Draggable from 'react-draggable';
import {WrapperDraggable} from './WrapperDraggable'

export class Box extends React.Component{
constructor(props) {
    super(props);
    this.state = {
      count:0
    };
  }

addElement=(count,zIdx) => {
if(count > 0) {
        return (
                      <WrapperDraggable count={count} zIdx={zIdx} width={count*175} height={count*175}>
                      {this.addElement(count-1,zIdx+1)}
                      </WrapperDraggable>

               ) }
               else{
                return null;
               }
}

gggg=()=>{
 this.setState({count: this.state.count+1})
}


render(){
return (
<div>
<Draggable>
        <button onClick={this.gggg}>addParent</button>
</Draggable>
<div style={{width: "100vw",height: "500vh"}}>{this.addElement(this.state.count,this.state.count)}</div>
</div>
);
}
}