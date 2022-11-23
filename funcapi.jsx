import React,{useEffect,useState,Component} from 'react'

import axios from 'axios';
import './api.css';
import { useNavigate } from 'react-router-dom';

export default function Funcapi() {
const[data,setData]=useState([]);
const navigate=useNavigate();
useEffect(()=>{
fetch(" https://fakestoreapi.com/products ")
.then(response=>response.json())
.then(result=>setData(result))

//axios.get(" https://fakestoreapi.com/products ")
//.then(response=>setData(response.data))

},[])                                                      
const handleProduct=(id)=>{
console.log(id)
      navigate(`/Single/${id}`) 

}

console.log(data)
  return (
    <div>
<h1>Function Api</h1>
<div className='prod'>
{data.map((products)=>{
return(
<div className='prod2'>

<img src={products.image} width="200px" height="200px"/>
<center>
<p>{products.category}</p>
<h2>{products.price}</h2>
<button className='btn btn-warning' onClick={()=>handleProduct(products.id)}>Buy Now</button>
</center>

    </div>
)
})}

</div>

    </div>
  )
}
