import React from "react";
import "../src/App.css";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import CreateFunc from "./CreateFunction/createfunction";
import Dash from "./DashBoard/dashboard";
import Report from "./Report/report.jsx"
import Function from "./Function/function";
import Userlog from "./UserLogin/userlogin";


const App=()=>{
  return(
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Userlog/>}/>
      <Route path="/dash" element={<Dash/>}/>
      <Route path="/function" element={<Function/>}/>
      <Route path="/Createfunction" element={<CreateFunc/>}/>
      <Route path="/report" element={<Report/>}/>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App;
