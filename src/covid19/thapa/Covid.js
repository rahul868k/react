import React,{useEffect,useState} from 'react'
import './Covid'

const Covid = () => {

    const [data, setData] = useState([])

    const getData = async () =>{
        try {
            const res =await fetch('https://api.covid19india.org/data.json'); 
            const actual = await res.json()
            console.log(actual.statewise[0])
            setData(actual.statewise[0])
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(() => {
        getData()
        
    }, [])
    return (
        <>
            <section>
            <h1>Live</h1>
            <h2>Covid-19 Stats</h2>

            <ul>
                <li className="card">
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_na">
                                <span>Our</span> Country
                            </p>
                            <p className="card_total card_small">INDIA</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_na">
                                <span>Total</span> Recovered
                            </p>
                            <p className="card_total card_small">{data.recovered}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_na">
                                <span>Total</span> Confirmed
                            </p>
                            <p className="card_total card_small">{data.confirmed}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_na">
                                <span>Total</span> Deaths
                            </p>
                            <p className="card_total card_small">{data.deaths}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_na">
                                <span>Total</span> Active
                            </p>
                            <p className="card_total card_small">{data.active}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_na">
                                <span>Last</span> Updated
                            </p>
                            <p className="card_total card_small">{data.lastupdatedtime}</p>
                        </div>
                    </div>
                </li>
            </ul>
            </section>
        </>
    )
}

export default Covid
