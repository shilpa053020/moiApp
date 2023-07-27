import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import "./userlogin.css"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.css';



const Login= () =>{
  const [name,setuser] = useState("")
  const [password,setpassword] = useState("");
     
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
        e.preventDefault();
        const data = {
            Name:name,
            PassWord:password
      }
      axios.post("http://localhost:5000/Moi/create",data)
      
      .then((result) => {
         if(result.data){
          navigate("/dash")
          
         }
      })
      .catch((error) => { 
        alert(error)
      });
 
  }


  const loginNav=(e)=>{
    e.preventDefault();
    const data = {
        Name:name,
        PassWord:password
  }
  axios.post("http://localhost:5000/Moi/login",data)
  
  .then((result) => {
     if(result.data){
       navigate("/dash")
      
     }
  })
  .catch((error) => { 
    alert(error)
  });

}
        
    
   
  return (
        
        <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="container box1">
          <h2 class="login">Sign In</h2><br/>
          <form>
            <div className="form-group input-container1">
            <div class="input-container">
              <input type="text"  className="form-control small-input center-placeholder" id="username" placeholder="username" onChange={(e)=>{setuser(e.target.value)}}  value={name}/>
            </div><br></br>
            <div className="form-group input-container1">
              <input type="password" className="form-control small-input center-placeholder" id="password" placeholder="password"  onChange={(e)=>{setpassword(e.target.value)}}  value={password}/><br/>
            </div>
            </div>
            <button type="submit" className="btn btn-primary btnlogin"  onClick={(e)=>loginNav(e)} value="login" >Login</button><br></br>
            
            <button class="createnew" onClick={(e)=>handleSubmit(e)}  value="text" >Create new account</button>
         
          </form>
        </div>
        </div>
       
  )
};

export default Login
