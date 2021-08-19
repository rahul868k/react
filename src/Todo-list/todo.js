import './todo.css'

import React, { useState } from 'react'

function Todo() {
    const [todo, setTodo] = useState([
        {
            text: 'Learn about React',
            isCompleted: 'false'
        },
        {
            text: 'Meet friend for Lunch',
            isCompleted: 'false'
        },
        {
            text: 'Build really cool todo app',
            isCompleted: 'false'
        },
    ])
    return (
        <>
            <div className="app">
                <div className="todo-list">
                    {
                        todo.map((todo, index) => {

                            const { text, isCompleted } = todo;
                            return (
                                <div className="todo" key={index}>
                                    {text}
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Todo
