import React, { useState } from 'react'
import { Service } from './Api/Workapi'

const Services = () => {

    const [services, setServices] = useState(Service)
    return (
        <div>
            <section className="service-main-container">
                <div className="container service-container">
                    <h1 className="main-heading text-center fw-bold"> How to send money</h1>
                    <div className="row">
                        {
                            services.map(ser => {
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
                        }

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
