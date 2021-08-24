import React,{useEffect,useState} from 'react'
import Header from './header'
import Howitworks from './Howitworks'
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";

const Home = () => {
    const [loading, setLoading] = useState(false)
    useEffect(()=> {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    },[])
    const override =css`
    display:block;
    margin: 35vh auto 50vh;
    `;
    return (
        <div>
            {   loading ? <RingLoader color={"#6f5de7"} loading={loading} css={override} size={60} />
                :<div>
                    <Header/>
                    <Howitworks/>
                </div>
            }
        </div>
    )
}

export default Home
