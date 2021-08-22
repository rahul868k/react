import React, { useState} from 'react'
import Api from './Api/Workapi'

const Howitworks = () => {
    
    const [data ] = useState(Api)

    return (
        <>
            <section>
                <div className="work-container container pb-5">
                    <h1 className="main-heading text-center">How does it works</h1>
                    <div className="row">
                        { 
                            data.map(currentE => {
                                const { id, logo, title, info } = currentE;
                                return (
                                    <>
                                        <div className="col-12 col-lg-4 text-center work-container-sub" key={id}>
                                            <i className={logo}></i>
                                            <h2 className="sub-head">{title}</h2>
                                            <div className="main-hero-para w-100">
                                                {info?info:'loading...'}
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Howitworks
