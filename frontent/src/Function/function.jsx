import React,{useState} from "react"
import { useNavigate} from "react-router-dom"
import "./function.css"
import axios from "axios"




const Function = () => {

   
    const[weds, setweds]=useState("")
  
    const navigate = useNavigate();
   
    
    const functionSubmit = (e) => {
        e.preventDefault();
        const data = {
            BrideGroomsandBrideName:weds
        }
        axios.post("http://localhost:5000/Moi/newfunction",data)
       
        .then((result) => {
         if(result){
              navigate("/Createfunction")
            
         }
        })
        .catch((error) => { 
        alert(error)
        });
 
       
    }

   



    return (
        <form>
            <div class="item">
                <h1>Function</h1>

                     <div class="form">
                        <div className="row">
                            <div className="col-3"></div>
                            <label>Bride and BrideGrooms Name:</label>
                             <input type="text" class="in"  
                               onChange={(e)=>{setweds(e.target.value)}}
                              value={weds} ></input>

                        </div>
                    </div>
                    <br/>

                <button class="btn3" onClick={(e)=>functionSubmit(e)}>Create</button>
                 
                </div>
            
        </form>
    )
}

export default Function;
