import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

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
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container">
                        <a class="navbar-brand" href="##"><i class="fab fa-react"></i>React</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <NavLink to='/' exact activeClassName="active-nav"><a class="nav-link" aria-current="page" href="##">Home</a> </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to='/Services' activeClassName="active-nav"><a class="nav-link" href="##">Services</a></NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to='/About' activeClassName="active-nav"><a class="nav-link" href="##">About</a></NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to='/Contact' activeClassName="active-nav"><a class="nav-link" href="##">Contact</a></NavLink>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <a href="###" class="btn btn-style" type="submit" data-bs-toggle="modal" data-bs-target="#enroll">Sign up</a>
                                <a href="https://svg-loginform.netlify.app/" class="btn btn-style" type="submit">Login</a>
                            </form>
                        </div>
                    </div>
                </nav>
            </section>
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

export default Navbar;

