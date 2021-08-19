import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'

const Sidenav = () => {
    return (
        <>
             <div className="bar"></div>
            <div className="animation-area">
                <ul className="box-area">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <section class="navbar-bg">
                <div className="container n-bar d-flex justify-content-between flex-wrap">
                    <h1 className="navbar-brand"><i class="fab fa-react"></i>React</h1>
                    <form class="d-flex align-items-center">
                        <a href="###" class="btn btn-style" type="submit" data-bs-toggle="modal" data-bs-target="#enroll">Sign up</a>
                        <a href="https://svg-loginform.netlify.app/" class="btn btn-style d-flex justify-content-center align-items-center" type="submit">Login<i class="fas fa-arrow-right"></i></a>
                    </form>
                </div>
            </section>
            <input type="checkbox" id="menu-btn" />
            <label htmlFor="menu-btn" className="menu-btn"><span className="nav-icon"></span></label>
            <nav className="nav">              
                <ul>
                    <li><NavLink to='/' exact activeClassName="active-nav"><a href="##">Home</a></NavLink></li>
                    <li><NavLink to='/Services' activeClassName="active-nav"><a href="##">Services</a></NavLink></li>
                    <li><NavLink to='/About' activeClassName="active-nav"><a href="##">About</a></NavLink></li>
                    <li><NavLink to='/Contact' activeClassName="active-nav"><a href="##">Contact</a></NavLink></li>
                </ul>
            </nav>
            {/* <!-- Modal --> */}
            <div class="modal fade" id="enroll" tabindex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title fs-1" id="enrollLabel">Enrollment</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p class="lead fs-2">Fill out this form and we will get back to you</p>
                            <form>
                                <div class="mb-3">
                                    <label for="first-name" class="col-form-label fs-2">
                                        First Name:
                                    </label>
                                    <input type="text" class="form-control p-3" id="first-name" />
                                </div>
                                <div class="mb-3">
                                    <label for="last-name" class="col-form-label fs-2">Last Name:</label>
                                    <input type="text" class="form-control p-3" id="last-name" />
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="col-form-label fs-2">Email:</label>
                                    <input type="email" class="form-control p-3" id="email" />
                                </div>
                                <div class="mb-3">
                                    <label for="phone" class="col-form-label fs-2">Phone:</label>
                                    <input type="tel" class="form-control p-3" id="phone" />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary fs-2" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary fs-2">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidenav
