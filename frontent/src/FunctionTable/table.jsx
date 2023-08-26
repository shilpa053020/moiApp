import React, { useEffect, useState } from "react"
import { useNavigate, } from "react-router-dom"
import "./table.css"
import axios from "axios"

const Table = () => {
    const navigate = useNavigate()

    const functionnav = (user) => {
        navigate("/createfunction", { state: user })
    }

    const createfun = () => {
        navigate("/function")
    }
    const [data, setdata] = useState([]);

    useEffect(() => {
        getAll();
    }, []);

    const getAll = () => {
        axios
            .get("http://localhost:5000/Moi/allevent")
            .then((result) => {
                console.log(result);
                setdata(result.data);
            })
    };

    return (
        <>
            <div class=" mt-4 table-container1">
                <h3 class="tab3">SELECT EVENT</h3>
                <div class="mt-2">
                    <button class="btn btn-primary create5" onClick={createfun} >CREATE FUNCTION</button>
                </div>
                <table class="mt-3 ttb table-container2" >
                    <thead>
                        <tr>
                            <th scope="col">EVENT NAME</th>
                            <th scope="col">PAYMENT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((user) => (
                                <tr key={user.function_id} >
                                    <td>{user.BrideGroomsandBrideName}</td>
                                    <td>
                                        <button class="btn btn-primary create6" onClick={() => functionnav(user)}>Paymoi</button>
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

export default Table;