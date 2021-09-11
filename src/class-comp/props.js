// import React, { Component } from 'react'
import React from 'react'

export default class Props extends React.Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="card">
                                <img src={this.props.img} alt="card" className="card-img-top img-fluid" />
                                <div className="cord-body">
                                    <h5 className="card-title"> {this.props.head} </h5>
                                    <p className="card-text"> {this.props.name}</p>
                                    <a href="###" className="btn btn-primary"> {this.props.btn} </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
