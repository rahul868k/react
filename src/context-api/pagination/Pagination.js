import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './page.css'

const Pagination = () => {
    const [data, setData] = useState([])
    const [perpage, setPerpage] = useState([])
    let pageNumbers = []
    for(let i=1; i<Math.ceil(data.length/10)+1;i++){
        pageNumbers.push(i)
    }
    const pageHandler =(pageNumbers) =>{
        setPerpage(data.slice((pageNumbers*10)-10,pageNumbers*10))
    }
    // pageNumbers={pageHandler}
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => { setData(res.data); setPerpage(res.data.slice(0, 10)) })
    }, [])
    return (
        <>
            <div className="app">
                {data.length > 1 ?
                    <div>
                        {
                            perpage.map(post => {
                                return (
                                    <div className="post"> {post.title} </div>
                                )
                            })
                        }
                    </div>
                    :
                    <p>data not loaded</p>
                }
            </div>
                <center>
                {pageNumbers.map(page => 
                    <div className="page-button"  onClick={() => pageHandler(page)}> {page} </div>
                    )}
                </center>
        </>
    )
}

export default Pagination
