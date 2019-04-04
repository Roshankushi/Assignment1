import React, {Component } from "react";
import './addDelete.css';


class Toggler extends Component{
constructor(props){
    super(props);
    this.state = {
        buttonText: "Hide",
     show:true
    };
    this.toggler=this.toggler.bind(this);
}
toggler(){

}
render(){
    let content=<label>I am the toggler</label>
    return(
        
        <div className="toggler">
         <button type="button">{this.state.buttonText}</button>

        </div>
    )
}

}


export default Toggler;