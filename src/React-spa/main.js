import React from 'react'
import Home from './Home'
import Sidenav from './Sidenav'
import About from './About'
import Services from './Services'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Contact from './Contact'
import Footer from './Footer'
import ScrollTop from './ScrollTop'

const Main = () => {
    return (
        <div>
            <BrowserRouter>
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
            </BrowserRouter>
        </div>
    )
}

export default Main
