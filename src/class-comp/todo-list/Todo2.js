import React from 'react'
import './Todo2.css'
import Form from './form'
import List from './list'

class Todo2 extends React.Component{
    state={
        data:[{todo:"cooking"},{todo:"oil"},{todo:"food"}]
    }
    render(){
        return(
            <>
                <div className="app">
                    <Form></Form>
                    <h1>To do list</h1>
                    <List></List>
                </div>
            </>
        )
    }
}

export default Todo2