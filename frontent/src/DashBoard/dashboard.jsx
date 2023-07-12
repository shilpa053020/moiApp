import React from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css"



const DashBoard = () => {
  const navigate = useNavigate()
  const dashNav = () => {
    navigate("/table")
  }
  const ReportNav = () => {
    navigate("/report")
  }

  return (
    
      
        
        <div className="btns">
          <button className="btn1" onClick={dashNav} >Function</button>
      
          <button className="btn2" onClick={ReportNav}>Report</button>
        </div>
      
      
        

  )
}

export default DashBoard;