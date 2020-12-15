//UserEffect After Render

import React, {useState, useEffect}from 'react'

function HookCounterFive() {
    const [count, setcount] = useState(0)

    useEffect(() => {
        document.title =`${count} times`
    })
    return (
        <div>
            <div>Count{count}</div>
            <button onClick ={() =>setcount(count+1)}>Click for the count</button>
        </div>
    )
}

export default HookCounterFive
