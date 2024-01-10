import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [fullName, setFullName] = useState({
    fname: '',
    lname: '',
  });

  const inputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setFullName((prev) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: prev.lname,
        }
      } else if (name === "lname") {
        return {
          fname: prev.fname,
          lname: value,
        }
      }
    })
  }
  const onSubmits = (event) => {
    event.preventDefault()
    alert('form submited')
  }
  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}></form>
        <h1>Hello {fullName.fname} {fullName.lname} </h1>
        <input type="text"
          placeholder='Enter Your Name'
          name='fname'
          onChange={inputEvent}
          value={fullName.fname} />

        <input type="password"
          placeholder='Enter Your password'
          name='lname'
          onChange={inputEvent}
          value={fullName.lname}
        />
        <button type='submit'>Click Me</button>
      </div>

    </>
  )
}

export default App;