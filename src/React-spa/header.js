import React from 'react'

const Header = () => {
    return (
        <>
            <header>
                <section className="container main-hero-container p-4">
                    <div className="row">
                        <div className="col-12 col-lg-5 header-left-side d-flex justify-content-center flex-column align-items-start">
                            <h1 contentEditable="true" className="display-2">
                                Online payment made easy for You.
                            </h1>
                            <p className="main-hero-para">An e-commerce payment system facilitates the acceptance of electronic payment for online transactions.
                                Also known-as a sub component of electronic data inter charge,e-commerce payment systems have become increasingly popular
                                due to the widespread use of the internet-based shopping and banking
                            </p>
                            <h3>Get early access for great deals </h3>
                            <div className="input-group mt-3">
                                <input type="text" placeholder="enter your email" className="rounded-pill w-75 me-3 form-control-text p-2" />
                                <div className="input-group-button">Grab it now</div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-7 header-right-side d-flex justify-content-center align-items-center">
                            {/* <img src="./images/hero1.jpg" alt="heroImage1" className="img-fluid" /> */}
                            <video src="./images/hero1vd.webm" autoPlay repeat="true" loop></video>
                            <video src="./images/herovd2.webm" autoPlay repeat="true" loop></video>
                            {/* <img src="./images/hero4.jpg" alt="heroImage4" className="img-fluid" /> */}
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header
