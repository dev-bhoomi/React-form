import React, { useState } from 'react'
import './App.css'

const App=()=>{
  const [name,setName] = useState();
  const [fullName,setFullName] = useState();
  const inputEvent=(event)=>{
  setName(event.target.value)
 }
  const hello =()=>{
    setFullName(name)
  }
return(
  <>
  <h1>Hello {fullName}</h1>
  <input type="text" 
  placeholder='Enter Your Name'
  onChange={inputEvent}
  value={name}
  />
  <button onClick={hello}>Click Me</button>
  </>
)
}

export default App;