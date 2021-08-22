import React, { useState,useEffect } from 'react'
import { Service } from './Api/Workapi'
// import Loader from './icons8-buffering-96.png'
import ClimbingBoxLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";

const Services = () => {

    const [services] = useState(Service)
    const [color] = useState("#6f5de7")
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])
    const override =css`
        display:block;
        margin:0 auto;
        `;
    return (
        <div>
            <section className="service-main-container">
                <div className="container service-container">
                    <h1 className="main-heading text-center fw-bold"> How to send money</h1>
                    <div className="row">
                        {
                            loading ? <ClimbingBoxLoader color={color} loading={loading} css={override} size={40} />
                             :services.map(ser => {
                                const { id, logo, title, info } = ser;
                                return (
                                    <>
                                        <div className="col-11 m-auto col-lg-5 col-xxl-4 p-3 work-con-sub" key={id} >
                                        <i className={logo} > </i>
                                        <h2 className="sub-heading fw-bold"> {title} </h2>
                                        <p> {info} </p>
                                        </div>
                                    </>
                                )
                            })
                            // <div className="display-2 d-flex justify-content-center align-items-center">
                            //      <img src={Loader} alt="loader" />
                            // </div>
                        }

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
