import React from "react";
import {render} from "react-dom";
import {Box} from "./box"

class App extends React.Component {
render(){
return (<div>
<h1> Welcome!!</h1>
<Box/>
</div>
);
}
}
render(<App/>,window.document.getElementById("app"));