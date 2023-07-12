import React from "react";

import {BrowserRouter,Routes, Route} from "react-router-dom";
import CreateFunc from "./CreateFunction/createfunction.jsx";
import Dash from "./DashBoard/dashboard.jsx";
import Report from "./Report/report.jsx"
import Function from "./Function/function.jsx";
import Userlog from "./UserLogin/userlogin.jsx";
import Table from "./Table/table.jsx"


const App=()=>{
  return(
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Userlog/>}/>
      <Route path="/dash" element={<Dash/>}/>
      <Route path="/function" element={<Function/>}/>
      <Route path="/Createfunction" element={<CreateFunc/>}/>
      <Route path="/report" element={<Report/>}/>
      <Route path="/table" element={<Table/>}/>

      
     

    </Routes>
    </BrowserRouter>
   
  )
}

export default App;
