import React from 'react'
import "./Home.css"


function Home() {


  return (
    
    <div className='box'>
      <div className='container'>
        <h1>Login</h1>
      </div>

      <div className='input-field'>
        <input type='text' className='input' placeholder='Username' />
      </div>
      <br></br>
      <div className='input-field'>
        <input type='password' className='input' placeholder='Password' />
      </div>
      <br></br>
      <div className='input-field'>
        <input type='submit' className='submit' value="Login" />
      </div>
    </div>
  )
}

export default Home