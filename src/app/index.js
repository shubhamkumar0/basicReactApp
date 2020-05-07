import React from "react";
import {render} from "react-dom";
import {Box} from "./box"

class App extends React.Component {
render(){
var boundPosition={l:0,r:400,t:0,b:400};
var position={x:0,y:0};
return (<div>
<h1> hello!!</h1>
<Box title="kyabaatay" body="shody" height="200px" width="400px" boundPos={boundPosition} position={position}/>
</div>
);
}
}
render(<App/>,window.document.getElementById("app"));