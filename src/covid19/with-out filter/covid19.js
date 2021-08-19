import React, { useEffect, useState } from 'react'
import { useGlobalFilter } from 'react-table'
import './covid19.css'


const Covid19 = () => {
    const [search, setSearch] = useState("");
    useEffect(() => {
    }, [])
    const handler = e => {
        setSearch(e.target.value)
    }
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.covid19india.org/data.json').then(res => res.json()).then(jsondata => setData(jsondata.statewise));
    })
    return (
        <div>

            <h1 className="text-center">India Covid-19 Dashboard</h1>
            <div>
                <input type="text" placeholder="search by city" value={search} onChange={handler} />
            </div>
            <table className="table table-striped table-hover" >
                <thead className="table-dark">
                    <tr>
                        <th>state</th>
                        <th>confirmed</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                        <th>Active</th>
                        <th>Last-Update</th>
                    </tr>
                </thead>

                {
                    data.map(item => {
                        return (
                            <tbody>
                                <tr>
                                    <td> {item.state} </td>
                                    <td> {item.confirmed} </td>
                                    <td> {item.recovered} </td>
                                    <td> {item.deaths} </td>
                                    <td> {item.active} </td>
                                    <td> {item.lastupdatedtime} </td>
                                </tr>
                            </tbody>
                        )
                    })
                }

            </table>

        </div>
    )
}

export default Covid19
