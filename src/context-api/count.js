import React from 'react'
import { store } from '../App'
import { useContext } from 'react'

const Count = () => {
    const[ data,setData] = useContext(store)
    return (
        <div>
           <h3> count: {data.length}</h3>
        </div>
    )
}

export default Count
