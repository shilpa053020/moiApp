import React, { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import axios from "axios"
import { useDownloadExcel } from "react-export-table-to-excel"
import "./Viewmois.css"

const ViewMois = () => {
    const tableRef = useRef(null);
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

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: "Moi Payment Details",
        sheet: 'Users'
    })

    return (
        <div>
            <button class="btn btn-primary excel" onClick={onDownload}> Export excel </button>
            <div class="table-container3" >
                <table class="ttr table-container4" ref={tableRef}>
                    <thead>
                        <tr> <th>{uselocation.state.BrideGroomsandBrideName}</th></tr>
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
                            data.map((user, index) => (
                                <tr key={user.function_id} >
                                    <td>{index + 1}</td>
                                    <td>{user.Name}</td>
                                    <td>{user.Mobilenumber}</td>
                                    <td>{user.Address}</td>
                                    <td>{user.Moipayment}</td>
                                </tr>
                            ))
                        ) : (
                            <tr class="nodata">No Payment Made</tr>
                        )}
                    </tbody>
                </table></div>
        </div>
    )
}

export default ViewMois;