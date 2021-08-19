import React,{useState} from 'react'
import { store } from '../App'
import { useContext } from 'react'

const Display = () => {
    const [data,setData] = useContext(store)
    const [name, setName] = useState('')
    const submit=e=>{
        e.preventDefault();
        setData([...data,{brand:name}])
    }
    return (
        <div>
                {data.map(item => <h3>{item.brand}</h3> )}
                <form onSubmit={submit} >
                    <input type="text" placeholder='enter your brand'  onChange={(e)=> setName(e.target.value)}  />
                    <input type="submit" value="add" />
                </form>
        </div>
    )
}

export default Display
