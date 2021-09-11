import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <>
                <form>
                    <input type="text" required />
                    <button>Create</button>
                </form>
            </>
        )
    }
}
