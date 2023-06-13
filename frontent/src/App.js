import React from "react";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Userlog from "./UserLogin/userlogin";
import Dash from "./DashBoard/dashboard.jsx"
const App=()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Userlog/>}/>
      <Route path="/dashborad" element={<Dash/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
