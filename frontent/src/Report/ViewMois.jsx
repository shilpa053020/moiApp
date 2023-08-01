import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from "axios"

const ViewMois = () => {
    const uselocation = useLocation();
    console.log(uselocation.state.function_id);
    const [data, setmois] = useState([])
    useEffect(() => {
        const data1 = uselocation.state.function_id

        axios.get(`http://localhost:5000/Moi/getallmoi/${data1}`)
            .then((res) => {
                console.log(res);
                setmois(res.data)
            }).catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <div>
           
            <table class="table table-bordered container" >
            <thead>
                <tr> <th >{uselocation.state.BrideGroomsandBrideName}</th></tr>
                <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Mobile No</th>
                    <th scope="col">Address</th>
                    <th scope="col">Payment</th>
                </tr>
            </thead>
            <tbody>
                {data.length > 0 ? (
                    data.map((user,index) => (
                        <tr key={user.function_id} >
                            <td>{index + 1}</td>
                            <td>{user.Name}</td>
                            <td>{user.Mobilenumber}</td>
                            <td>{user.Address}</td>
                            <td>{user.Moipayment}</td>
                        </tr>
                    ))
                ) : (
                    <tr>No Payment Made</tr>
                )}
            </tbody>


        </table></div>
    )
}

export default ViewMois