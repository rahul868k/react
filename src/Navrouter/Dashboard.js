import React from 'react'

const Dashboard = ({match}) => {
    return (
        <div>
            <h3>this is from Dashboard: {match.params.name} </h3>
        </div>
    )
}

export default Dashboard
