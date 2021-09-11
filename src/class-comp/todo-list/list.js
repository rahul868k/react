import React, { Component } from 'react'
import ListItem from './listitem'

export default class List extends Component {
    
    render() {
        const {data}=this.state
        console.log(data)
        return (
            <>
                <ul>
                    {
                        data.map((item,index) =>{
                            return <ListItem
                             item={item.todo}
                              key={index}>
                              
                              </ListItem>
                        })
                    }
                </ul>
            </>
        )
    }
}
