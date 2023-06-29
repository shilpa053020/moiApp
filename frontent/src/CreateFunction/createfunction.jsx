import React from "react";

import "./createfunction.css";



const CreateFunction = () => {
    

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
                            class="form-control">
                        </input>
                    </div>
                </div>
                
            

               
            <div className="row">
                <div className="col-3">
                    <label>Mobile Number:</label><br/>
                    <input
                        type="number" 
                        
                        className="form-control" ></input>
                </div>
                </div>

                <div className="row">
                <div className="col-3">
                    <label>Address:</label><br/>
                    <input
                        type="text"
                        className="form-control"></input>
                </div>
                </div>
            
           
            <div className="row">
                <div className="col-3">
                    <div className="form-group">
                        <label>MoiPayment:</label><br/>
                        <input type="Number"
                            class="form-control">
                        </input>
                    </div>
                </div><br></br>
                <button class="btn4"> PAY MOI</button>
               
                </div>

              


            </div>
            
            </div>

        </form>
    )
}

export default CreateFunction;