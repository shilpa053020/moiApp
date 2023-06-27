import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import "./userlogin.css"
import axios from "axios"


function Login() {
  const [name,setuser] = useState("")
  const [password,setpassword] = useState("");
     
  const navigate = useNavigate()
  const usernav = () => {
      navigate("/dash")
        
    }
    const handleSubmit = (e)=>{
   
         const data = {
          Name:name,
          PassWord:password
         }
        
        axios.post("http://localhost:5000/MOI/create",data)
        .then((result) => {
           if (result.data) {
            usernav()
           }
        })
        .catch((error) => { 
          alert(error)
        });
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
        <button type='submit' className='submit' value="Login" onClick={handleSubmit}/>
      </div>
    </div>
  )
}

export default Login
