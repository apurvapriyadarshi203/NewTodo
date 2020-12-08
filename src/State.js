import React, { Component } from 'react'

export class State extends Component {
    constructor() {
        super()
        this.state = {
             message :"Welcome Here",
             background : 'blue'
        }
    }
    changeMessage(){
        this.setState  ({
            message:"Thanks For Subscribing",
            background: 'pink'
        })
    }
    render() {
        return (
            <div>
            <h4>{this.state.message}</h4>
            <button onClick ={() => this.changeMessage()}>Click</button>          
            </div>
        )
    }
}

export default State
