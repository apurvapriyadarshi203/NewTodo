import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const IncrementSix =() =>{
        for(let i =0;i< 6;i++){
            setCount(prevCount =>prevCount+1)
        }
    }
    return (
        <div>
            <div>Count {count}</div>
            <div>
                <button onClick = {() => setCount(initialCount)}>Reset</button>
                <button onClick ={() => setCount(prevCount =>prevCount+1)}>Increment</button>
                <button onClick ={() =>setCount(prevCount =>prevCount-1)}>Decrement</button>
                <button onClick ={() =>setCount(prevCount=>prevCount+5)}>Increment 5</button>
                <button onClick ={IncrementSix}>Increment 6</button>
            </div>
        </div>
    )
}

export default HookCounterTwo
