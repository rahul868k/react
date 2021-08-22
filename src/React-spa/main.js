import React,{useState,useEffect} from 'react'
import Home from './Home'
import Sidenav from './Sidenav'
import About from './About'
import Services from './Services'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Contact from './Contact'
import Footer from './Footer'
import ScrollTop from './ScrollTop'
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";

const Main = () => {
    const [loading, setLoading] = useState(false)
    let [color] = useState("#6f5de7");
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2500);
    }, [])
    const override =css`
        display:block;
        margin: 38vh auto;
        `;
    return (
        <div>
            {loading ? <RingLoader color={color} loading={loading} css={override} size={60} />
            :<BrowserRouter>
                <ScrollTop></ScrollTop>
                <Sidenav></Sidenav>
                <Switch>
                    <Route exact path='/' component={Home} ></Route>
                    <Route exact path='/services' component={Services} ></Route>
                    <Route exact path='/about' component={About} ></Route>
                    <Route exact path='/contact' component={Contact} ></Route>
                    <Redirect to='/'></Redirect>
                </Switch>
                <Footer></Footer>
            </BrowserRouter>}
        </div>
    )
}

export default Main
