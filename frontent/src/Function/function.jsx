import React from "react";
import { useNavigate } from "react-router-dom";
import "./function.css"



const Function = () => {
    const navigate = useNavigate()
    const functionnav = () => {
        navigate("/createfunction")
    }

    return (
        <form>
            <div class="item">
                <h1>Function</h1>


                <div>
                    <div class="form">
                        <div className="row">
                            <div className="col-3"></div>
                            <label>FunctionName:</label>
                            <select id="function" name="function">
                                <option value="wedding">WEDDING</option>
                                <option value="EAR">EAR PIERCING CEREMONY</option>
                                <option value="fiat">PUBERTY CEREMONY</option>
                                <option value="audi">ENGAGEMENT</option>
                            </select>

                            <input type="text" class="form-control"></input>

                        </div>
                    </div>
                    <br/>

                    <button className="btn3" onClick={functionnav}>CREATE</button>
                 
                </div>
            </div>
        </form>
    )
}

export default Function;
