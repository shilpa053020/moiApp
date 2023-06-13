import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./userlogin.css"

const Userlogin = () => {
    const navigate = useNavigate();
    const dashboardnav = ()=>{
        navigate("/dashboard");
    }



 return ( 
        <div>
            <h1>LOGIN</h1>
           
        </div>
            
       
        
)
}
export default Userlogin;