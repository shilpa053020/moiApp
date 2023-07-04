import React,{ useState } from "react";
import "./createfunction.css";
import axios from "axios"



const CreateFunction = () => {
    const [Name, setName]=useState("")
    const [Mobilenumber, setNumber]=useState("")
    const [Address, setAddress]=useState("")
    const [Moipayment, setPayment]=useState("")

    const Submitfun = (e)=> {
        e.preventDefault();
        const data = {
            Name:Name,
            Mobilenumber:Mobilenumber,
            Address:Address,
            Moipayment:Moipayment
    }

    axios.post("http://localhost:5000/Moi/createfun",data)
    .then((result) => {
        if(result){
          console.log(result)
        }
       })
       .catch((error) => { 
       alert(error)
       })
    }

    return (
        <form>
            <div class="func">
               
                <h2 class="rose">CASH GIFT</h2>
                

                <div  class="form3 rose">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="form-group">
                        <label>Name:</label><br/>
                        <input type="text"
                            class="form-control"
                            onChange={(e)=>{setName(e.target.value)}}
                            value={Name}>
                        </input>
                    </div>
                </div>
                
            

               
            <div className="row">
                <div className="col-3">
                    <label>Mobile Number:</label><br/>
                    <input
                        type="number" 
                        onChange={(e)=>{setNumber(e.target.value)}}
                        className="form-control"
                        value={Mobilenumber} ></input>
                </div>
                </div>

                <div className="row">
                <div className="col-3">
                    <label>Address:</label><br/>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e)=>{setAddress(e.target.value)}}
                        value={Address}></input>
                </div>
                </div>
            
           
            <div className="row">
                <div className="col-3">
                    <div className="form-group">
                        <label>MoiPayment:</label><br/>
                        <input type="Number"
                            class="form-control"
                            onChange={(e)=>{setPayment(e.target.value)}}
                            value={Moipayment}>
                        </input>
                    </div>
                </div><br></br>
                <button class="btn4" onClick={(e)=>Submitfun(e)}> PAY MOI</button>
               
                </div>

              


            </div>
            
            </div>

        </form>
    )
}

export default CreateFunction;

