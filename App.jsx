import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
// import Classapi from './classapi.jsx'
import Funcapi from './funcapi.jsx'
import Home from './car2.jsx'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Single from './single.jsx'

function App() {

  return (
    <div className="App">
     
     <Home/>
  
      <div>
      
      <Routes>
  
      <Route path="/" element={<Funcapi/>}/>
<Route path="Single">
<Route index element={<Single/>}/>
<Route path=":productID" element={<Single/>}/>
</Route> 
      </Routes>
       </div>
    </div> 
  )
}

export default App
