import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    Increment() {
        this.setState ({
            count : this.state.count + 1
        })
    }
    Zeroo() {
        this.setState({
            count:this.state.count-this.state.count
        })
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.Increment()}>Click Here</button>
                <button onClick={() =>this.Zeroo()}>Abcd</button>
            </div>
        )
    }
}

export default Counter
