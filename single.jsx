import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
export default function Single() {
const{productID}=useParams()
console.log(productID)
const[prod,setProd]=useState([])
useEffect(()=>{
axios.get('https://fakestoreapi.com/products/'+productID)
.then(res=>setProd(res.data))

},[])


  return (
    <div>
<img src={prod.image} width="200px" height="200px"/>
<h1>{prod.title}</h1>
<h4>{prod.price}</h4>

    </div>
  )
}
