// import React,{useState} from 'react'
// import { Redirect } from 'react-router';
import { useHistory } from 'react-router'
import React from 'react'

const Home = () => {

    // const [auth, setAuth] = useState(false)
    // if(auth){                                                 //both rcc & rfc
    //     return <Redirect to='/dashboard'></Redirect>
    // }

    let history = useHistory()
    return (
        <div>
            <h3>this is from home</h3>
            <button onClick={()=> history.push('/about') } >login</button>
        </div>
    )
}
export default Home