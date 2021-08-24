import React,{useState, useEffect} from 'react'
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";

const Contact = () => {
    const [loader, setLoader] = useState(false)
    useEffect(()=> {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 2000);
    },[])
    const override =css`
    display:block;
    margin: 35vh auto 50vh;
    `;
    return (
        <>  {loader ? <RingLoader color={"#6f5de7"} loader={loader} css={override} size={60} />
            :<section id="Contact-Us" class="py-3 p-lg-4">
                <div class="container mt-4">
                    <div class="row g-4">
                        <div class="col-md" data-aos="fadeInUp">
                            <h2 class="text-center mb-4 text-primary display-5">Contact Info</h2>
                            <ul class="fs-2 list-group list-group-flush lead">
                                <li class="list-group-item">
                                    <span class="fw-bold">Main Location:</span> Hyderabad
                                </li>
                                <li class="list-group-item">
                                    <span class="fw-bold">Enrollment Phone:</span> (555) 555-5555
                                </li>
                                <li class="list-group-item">
                                    <span class="fw-bold">Student Phone:</span> (333) 333-3333
                                </li>
                                <li class="list-group-item">
                                    <span class="fw-bold">Enrollment Email:</span> (555)
                                    enroll@frontendbc.test
                                </li>
                                <li class="list-group-item">
                                    <span class="fw-bold">Student Email:</span>
                                    student@frontendbc.test
                                </li>
                            </ul>
                        </div>
                        <div className="contact-rightside mt-5 col-12 col-md">
                            <form>
                                <div className="row">
                                    <div className="col-12 col-lg-6 contact-input-field">
                                        <input type="text" className="form-control" placeholder="First Name" />
                                    </div>
                                    <div className="col-12 col-lg-6 contact-input-field">
                                        <input type="text" className="form-control" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-lg-6 contact-input-field">
                                        <input type="text" className="form-control" placeholder="Phone Number" />
                                    </div>
                                    <div className="col-12 col-lg-6 contact-input-field">
                                        <input type="text" className="form-control" placeholder="Email ID" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 contact-input-field">
                                        <input type="text" className="form-control" placeholder="Add Address" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12 ">
                                        <input type="text" className="form-control" placeholder="Enter Your Message" />
                                    </div>
                                </div>
                                <div class="form-check form-checkbox-style">
                                    <input class="form-check-input" type="checkbox" id="flexCheckChecked" />
                                    <label className="form-check-label main-hero-para"> I agree that the thapatechnicalpay may contact me at the email address or phone number above
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-style w-100">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>}
        </>
    )
}

export default Contact
