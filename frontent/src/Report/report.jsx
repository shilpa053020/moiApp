import React ,{useEffect,useState}from "react"
import { useNavigate} from "react-router-dom"
import axios from "axios"
import "./report.css"
const Report = () => {
    const navigate = useNavigate()
    const[fun,setfun]=useState([]);
    const viewnav = () =>{
        navigate("/viewnav")
    }
    //const createfun = () =>{
      //  navigate("/function")
    //}
useEffect(() => {
    getAll();
},[]);
    

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
    

    <table className="table table-bordered table table-danger">
        <thead >
            <tr>
                <th>Event Name</th>
                <th>View</th>
            </tr>
           
        </thead>
        
        <tbody>
          {fun.length > 0 ? (
            fun.map((user) => (
              <tr key={user._id} >
                <td>{user.BrideGroomsandBrideName}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={viewnav}
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

     
        </>
    );   
};


export default Report;

