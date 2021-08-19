import React,{component} from 'react'
import Home from './Home'
import Sidenav from './Sidenav'
import About from './About'
import Services from './Services'
import { BrowserRouter,Switch,Route, } from 'react-router-dom'
import Contact from './Contact'
import Footer from './Footer'

const Main = () => {
    return (
        <div>
           <BrowserRouter>
           <Sidenav></Sidenav>
           <Switch>
           
                <Route exact path='/' component={Home} ></Route>
                <Route exact path='/Services' component={Services} ></Route>
                <Route exact path='/About' component={About} ></Route>
                <Route exact path='/Contact' component={Contact} ></Route>
            </Switch>
            <Footer></Footer>
           </BrowserRouter>
        </div>
    )
}

export default Main
