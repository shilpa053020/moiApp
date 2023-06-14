import React from 'react'
import {useNavigate} from "react-router-dom"
import "./userlogin.css"


function Login() {
  const navigate = useNavigate()
  const usernav = () => {
      navigate("/dash")
  }

  return (

    <div className='box'>
      <div className='container'>
        <h1>Login </h1>
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
        <input type='submit' className='submit' value="Login" onClick={usernav}/>
      </div>
    </div>
  )
}

export default Login
