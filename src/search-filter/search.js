import React, { useState } from 'react'
import Data from "./city.json"

const Search = () => {

    const [search, setSearch] = useState('')
    // const searchC=e=>{
    //     setSearch(e.target.value)
    // }
    const center = {
        maxHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexFlow: 'column',
    }
    const input = {
        border: 'none',
        borderBottom: '1px solid',
        padding: '10px'
    }
    const City = {
        padding: '10px',
    }

    return (
        <div style={center} >
            <h3>Search which city you want</h3>
            <input style={input} type="text" placeholder="Enter your city name" value={search} onChange={(e) => setSearch(e.target.value)} />
            {Data.filter(city => city.name.toLowerCase().includes(search.toLowerCase())).map(city => {
                return <div style={City}>
                    {city.name}
                </div>
            })}
        </div>
    )
}

export default Search
