import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./report.css"

const Report = () => {
  const navigate = useNavigate()
  const [fun, setfun] = useState([]);
  const viewmoi = (user) => {
    navigate("/Viewmoi", { state: user })
  }
  //const createfun = () =>{
  //  navigate("/function")
  //}
  useEffect(() => {
    getAll();
  }, []);

  const getAll = () => {
    axios
      .get("http://localhost:5000/Moi/allevent")
      .then((result) => {
        console.log(result);
        setfun(result.data); // Update the property name to result.data instead of result.data
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div class="table-container3">
        <div class="report1">
          <h3 class="ttr3">REPORT</h3>
        </div>
        <table className="ttr table-container4">
          <thead >
            <tr>
              <th>Event Name</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {fun.length > 0 ? (
              fun.map((user) => (
                <tr key={user.function_id} >
                  <td>{user.BrideGroomsandBrideName}</td>
                  <td>
                    <button
                      className="btn btn-primary create7"
                      onClick={() => viewmoi(user)}
                    >View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>NO DATA</tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Report;
