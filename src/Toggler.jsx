import React, {Component } from "react";
import './addDelete.css';


class Toggler extends Component{
constructor(props){
    super(props);
    this.state = {
        buttonText: "Hide",
     Show:true
    };
    this.toggle=this.toggle.bind(this);
}
toggle(){
let currentState =this.state;
currentState.buttonText=currentState.show?'Hide':'Show';
currentState.Show=!currentState.Show;
this.setState(currentState);
}
render(){
    let content ='';
    if(this.state.Show){
        content= <label>I am the toggler</label>
    }
    return(
        
        <div className="toggler">
         <button onClick={this.toggle} type="button">{this.state.buttonText}</button>
         {content}

        </div>
    )
}

}


export default Toggler;