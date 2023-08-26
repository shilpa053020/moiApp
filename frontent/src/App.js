import React from "react";
import {ToastContainer} from "react-toastify"
import {BrowserRouter,Routes, Route} from "react-router-dom";
import CreateFunc from "./PayMoidetails/paymoidetails.jsx";
import Dash from "./DashBoard/dashboard.jsx";
import Report from "./Report/report.jsx"
import Function from "./Function/function.jsx";
import Userlog from "./UserLogin/userlogin.jsx";
import Table from "./FunctionTable/table.jsx";
import ViewMois from "./ViewMoidetails/ViewMois.jsx";

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
      <Route path="/Viewmoi" element={<ViewMois/>}/>
      </Routes>
    <ToastContainer  position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"/>
    </BrowserRouter>
  )
}

export default App;
