import React, { Component } from 'react';
import './App.css';
import Addcomponent from './Addcomponent'
import Deletecomponent from './Deletecomponent'
import Imagecomponent from './Imagecomponent'
import Contentheading from './Contentheading'
import Price from './Price'



export default class Product extends Component {
constructor(props){
  super();
}
render(){
  return(
    <div>
      <div className="cartname">
      <Imagecomponent>{this.props.img}</Imagecomponent>
      <Contentheading>{this.props.h2}</Contentheading>
      <Price>{this.props.h4}</Price>
      <Addcomponent>{this.props.button}</Addcomponent>
      <Deletecomponent>{this.props.button}</Deletecomponent>
      </div>
      
    </div>
  )
}
}

