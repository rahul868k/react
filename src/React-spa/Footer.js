import React, { useState } from 'react'
import Foot from './Footer'

const Footer = () => {
    const [foot, setFoot] = useState([
        // {
        //     id:'1',
        //     one:'Download app',
        //     two:'Complete the instructions',
        //     three:'Receive your payments',
        //     four:'Get assured rewards on every payment'
        // },
        {
            id: '2',
            heading:"Links",
            one: 'razorpay',
            two: 'Zaakpay',
            three: 'PayU',
            four: 'PayPal'
        },
        {
            id: '3',
            heading:"Support",
            one: 'Download app',
            two: 'Complete the instructions',
            three: 'Receive your payments',
            four: 'Get assured rewards on every payment'
        },
        {
            id: '4',
            heading:"Guides",
            one: 'Home',
            two: 'Services',
            three: 'About',
            four: 'Contact'
        },
        {
            id: '5',
            heading:"Other portals",
            one: 'Norton security',
            two: 'NPCI',
            three: 'Bhim',
            four: 'Bharat pay'
        },
    ])
    return (
        <>
            <footer class="py-2 mt-1">
                <div class="container py-5">
                    <div class="row">
                        <div class="col-lg-3 mb-3">
                            <h2 className="fw-bold text-light display-5">Secure pay</h2>
                            <ul className="list-unstyled">
                                <li>Download app</li>
                                <li>Complete the instructions</li>
                                <li>Receive your payments</li>
                                <li>Get assured rewards on every payment</li>
                            </ul>
                        </div>
                        {
                            foot.map(footer => {
                                const { id,heading, one, two, three, four } = footer;
                                return (
                                    <div class="col-lg-2 col-6 mx-auto" key={id}>
                                        <h5 className="fw-bold text-light fs-2"> {heading} </h5>
                                        <ul className="list-unstyled">
                                            <li>{one}</li>
                                            <li> {two} </li>
                                            <li> {three} </li>
                                            <li> {four} </li>
                                        </ul>
                                    </div>
                                )
                            })
                        }

                    </div><hr />
                    <div className="container m-auto pt-5">
                        <p className="text-center m-auto">Copyright @ 2021 Secure-pay All rights received</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
