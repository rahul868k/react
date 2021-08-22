import React from 'react'
import './style.css'

const Loading = () => {
    return (
        <>
            {/* <div className="spinner-border text-primary" role="status">
                <span className="sr-only"></span>
            </div> */}
            
            {/* <svg>
                    <circle cx="70" cy="70" r="70" />
            </svg> */}
            <div className="lo">
                <svg>
                    <circle cx="45" cy="45" r="45" />
                </svg>
            </div>

            {/* <div className="display-2 mt-5">loading....</div> */}
        </>
    )
}

export default Loading
