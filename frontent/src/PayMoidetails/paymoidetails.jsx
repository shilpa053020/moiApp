import React, { useState } from "react";
import "./paymoidetails.css";
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useLocation } from "react-router-dom";
import { toast } from 'react-toastify';

const Paymoidetails = () => {
  const uselocation = useLocation();

  const [Name, setName] = useState("")
  const [Mobilenumber, setNumber] = useState("")
  const [Address, setAddress] = useState("")
  const [Moipayment, setPayment] = useState("")

  const Submitfun = (e) => {
    e.preventDefault();
    const data = {
      Name: Name,
      Mobilenumber: Mobilenumber,
      Address: Address,
      Moipayment: Moipayment,
      function_id: uselocation.state.function_id
    }
    axios.post("http://localhost:5000/Moi/createfun", data)
      .then((result) => {
        clearFields(e)
        console.log(result)
        toast("🦄  Payment Done Successfully!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",

        });
      })
      .catch((error) => {
        alert(error)
      })
  }

  const clearFields = (e) => {
    e.preventDefault();
    setName("")
    setPayment("")
    setAddress("")
    setNumber("")
  }
  return (

    <div class="container3">
      <div class="container justify-content-center mt-5">
        <div class="background-color3">
          <h1 class="text-center h1">{uselocation.state.BrideGroomsandBrideName}</h1>
          <form onSubmit={Submitfun} >
            <div class="form-group input-container2 frm1">
              <label for="name" class="tt3">Name :</label>
              <input type="text" class="form-control input-container2" id="name" placeholder="Enter your name" onChange={(e) => { setName(e.target.value) }} value={Name} ></input>
            </div>
            <div class="form-group input-container2 frm1">
              <label for="mobile" class="tt3">Mobile Number :</label>
              <input type="tel" class="form-control input-container2" id="mobile" placeholder="Enter your mobile number" pattern="[0-9]{10}" title="Please enter a valid 10-digit mobile number" required onChange={(e) => { setNumber(e.target.value) }} value={Mobilenumber} ></input>
            </div>
            <div class="form-group input-container2 frm1">
              <label for="address" class="tt3">Address :</label>
              <textarea class="form-control input-container2" id="address" rows="3" placeholder="Enter your address" onChange={(e) => { setAddress(e.target.value) }} value={Address} ></textarea>
            </div>
            <div class="form-group input-container2 frm1">
              <label for="payment" class="tt3">Payment :    </label>
              <input class="form-control" id="payment" placeholder="Enter your amount" onChange={(e) => { setPayment(e.target.value) }} value={Moipayment} ></input>
            </div>
            <div class="text-center mt-3">
              <button type="submit" class="btn btn-primary create2">Pay Moi</button>
            </div>
            <button type="button" class="btn btn-primary create2" onClick={(e) => clearFields(e)}>clear</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Paymoidetails;

