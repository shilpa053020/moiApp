import React ,{useEffect,useState}from "react"
import { useNavigate} from "react-router-dom"
import "./table.css"
import axios from "axios"

const Table = () => {
    const navigate = useNavigate()
    const functionnav = () =>{
        navigate("/createfunction")
    }
    const createfun = () =>{
        navigate("/function")
    }
    
    const[data,setdata]=useState([]);
useEffect(() => {
    getAll();
},[]);
    
    const getAll = () => {
        axios
          .get("http://localhost:5000/Moi/allevent")
          .then((result) => {
           console.log(result);
           setdata(result.data);
           
      
          });
      };
    
  return (
    <>
    <div className="crtfun">
    <button type="button" className="btn btn-warning" onClick={createfun}>CREATE FUNCTION</button>
    </div>

    <table className="table table-bordered table table-danger">
        <thead >
            <tr>
                <th>Event Name</th>
                <th>payment</th>
            </tr>
           
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((user) => (
              <tr key={user._id} >
                <td>{user.BrideGroomsandBrideName}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={functionnav}
                  >payMoi
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


export default Table;