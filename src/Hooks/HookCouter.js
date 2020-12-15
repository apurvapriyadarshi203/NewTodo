import React , {useState} from 'react'

function HookCouter() {
    const [count, setCount] = useState(0) //Array Destructing
    return (
        <div>
            <div>Count {count}</div>
            <button onClick ={() => setCount(count+1)}>HookCount</button>
        </div>
    )
}

export default HookCouter
