import React from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const DashBoard = () => {
  const navigate = useNavigate()

  const dashNav = () => {
    navigate("/table")
  }
  
  const ReportNav = () => {
    navigate("/report")
  }

  return (
    <div className="container1">
      <div class="background-wrapper">
        <button className="btn btn-primary btn-block btn1" onClick={dashNav}>FUNCTION</button>
        <button className="btn btn-primary btn-block btn1" onClick={ReportNav}>REPORT</button>
      </div>
    </div>
  )
}

export default DashBoard;