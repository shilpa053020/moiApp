import React, {useState} from 'react'

import "./userlogin.css"
import axios from "axios"


function Login() {
  const [name,setuser] = useState("")
  const [password,setpassword] = useState("");
     
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
        <input type='text'
          className='input'
          placeholder='Username'
          onChange={(e)=>{setuser(e.target.value)}}
          value={name}
          />
      </div>
      <br></br>
      <div className='input-field'>
        <input type='password'
          className='input'
          placeholder='Password'
          onChange={(e)=>{setpassword(e.target.value)}}
          value={password}
          />
      </div>
      <br></br>
      <div className='input-field'>
        <button type='submit'>login</button>
      </div>
    </div>
  )
}

export default Login
