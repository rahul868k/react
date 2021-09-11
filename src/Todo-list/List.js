import React from 'react'

const List = (props) => {
    return (
        <>
            <div className="todo_style">
                <i className="fas fa-times deleteIcon" onClick={()=>{props.onSelect(props.id)}}></i>
                <li> {props.text} </li>
            </div>
        </>
    )
}

export default List
