import React, {Component} from 'react'



 class ShopingDetails extends Component{
    constructor(props){
        super(props);
    }
    render(){
return(
    <div className="marginbtn">
     
       <img src={this.props.details.image_url}  />
       <div className="Content">
       <h2>{this.props.details.name}</h2>
       <h5>{this.props.details.price}<br/>Estimated price</h5>
       <h6>{this.props.details.description}<br/>Expected launch</h6>
       </div>
       <div className="btnDiv">
           <button type="button" onClick={()=>this.props.add()}>AddCart</button>
            <button type="button" onClick={()=>this.props.delete()}>DeleteCart</button>
            
       </div>
       </div>
)
    }
}

export default ShopingDetails;