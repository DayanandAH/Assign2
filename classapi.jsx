import React, { Component } from 'react'
import './api.css';
import Anim from './anim.jsx'
export default class Classapi extends Component {

    constructor(props) {
    super(props)
    this.state={
data:[],
loader:true

    }
 }

componentDidMount(){
fetch(" https://fakestoreapi.com/products ")
.then(response=>response.json())
.then(result=>this.setState({
data:result,
loader:false

}))

}

  render() {
    console.log(this.state.data)
    return (
      <div>
        
        <h1>Classapi</h1>
        <div className='prod'>

{ this.state.loader?(<div style={{position:'relative',left:'55em', top:'15em'}}> <Anim/> </div>):

this.state.data.map((products)=>{
return(

<div className='prod2'>
<img src={products.image} width="200px" height="200px"/>
<center>
<p>{products.category}</p>
<h2>{products.price}</h2>
</center>
    </div>)

})}


        </div>
        
        </div>


    )
  }
}
