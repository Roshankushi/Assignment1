import React, {Component} from 'react'
import './addDelete.css';


 class Imagecomponent extends Component{
    constructor(props){
        super();
    }
    render(){
return(
    <div>
       <img src="data:image/jpeg;base64,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" />
    </div>
)
    }
}

export default Imagecomponent;