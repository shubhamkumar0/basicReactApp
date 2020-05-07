import React from "react";
import {render} from "react-dom";
import ReactDOM from 'react-dom';
import './Box.css'
import $ from 'jquery';

export class Box extends React.Component{
constructor(props) {
    super(props);
    this.state = {
      pos:{x: "0",y: "0"},
      dragging: false,
      rel: null,
      count:0
    };
    this.someRefName = React.createRef();
  }
componentDidMount(){
this.setState({
pos:this.props.position
})
}

 MouseDown=(e)=> {
    // only left mouse button
    if (e.button !== 0) return
    var pos = {top:this.someRefName.current.offsetTop,left:this.someRefName.current.offsetLeft};
    this.setState({
      dragging: true,
      rel: {
        x: e.pageX - pos.left,
        y: e.pageY - pos.top
      }
    })
    e.stopPropagation()
    e.preventDefault()
  }

  MouseUp=(e)=> {
    this.setState({dragging: false})
    e.stopPropagation()
    e.preventDefault()
  }
  MouseMove=(e)=> {
    if (!this.state.dragging) return
     var xt = e.pageX - this.state.rel.x;
      var yt = e.pageY - this.state.rel.y;
      if(xt>this.props.boundPos.r)xt=this.props.boundPos.r;
      if(yt>this.props.boundPos.b)yt=this.props.boundPos.b;
			if(xt<this.props.boundPos.l)xt=this.props.boundPos.l;
      if(yt<this.props.boundPos.t)yt=this.props.boundPos.t;
    this.setState({
      pos: {
        x: xt,
        y: yt
      }
    })
    e.stopPropagation()
    e.preventDefault()
  }
  MouseLeave=(e)=>{
  this.setState({dragging: false})
      e.stopPropagation()
      e.preventDefault()
  }
addElement=(count,height,width,z) => {

        if(count > 0) {
        return (<div key={count} ref={this.someRefName} style={
                                   {width: width+"px", height: height+"px", zIndex:z, top: this.state.pos.x, left: this.state.pos.y}  }  className="box">

                                     <h2 onMouseDown={this.MouseDown} onMouseUp={this.MouseUp} onMouseMove={this.MouseMove} onMouseLeave={this.MouseLeave}>{this.props.title}</h2 >
                                     <p>{this.props.body}</p>
                                     {this.addElement(count-1,height+100,width+100,z+1)}

               </div>) }
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
<button onClick={this.gggg}>addParent</button>
<div>{this.addElement(this.state.count,100,100,0)}</div>
</div>
);
}
}