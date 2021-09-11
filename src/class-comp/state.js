import React, { Component } from 'react'
import Props from './props'

export default class State extends Component {
    state=[
        {
            image:'./images/hero3.png',
            head:'heading',
            text:'text',
            btn:'click'
        },
        {
            image:'./images/hero4.jpg',
            head:'heading',
            text:'text',
            btn:'get'
        },
        {
            image:'./images/hero5.jpg',
            head:'heading',
            text:'text',
            btn:'now'
        }
    ]
    render() {
        return (
            <>
                {/* <Card img="./images/hero3.png" head="hero" name="rahul" btn="click"></Card>
                <Card img="./images/hero4.jpg" head="hero" name="rahul" btn="click"></Card>
                <Card img="./images/hero5.jpg" head="hero" name="rahul" btn="click"></Card> */}
                <Props img={this.state[0].image} head={this.state[0].head} name={this.state[0].text} btn={this.state[0].btn}></Props>
                <Props img={this.state[1].image} head={this.state[1].head} name={this.state[1].text} btn={this.state[1].btn}></Props>
                <Props img={this.state[2].image} head={this.state[2].head} name={this.state[2].text} btn={this.state[2].btn}></Props>
                
            </>
        )
    }
}
