// Use state with Array

import React, { useState } from 'react'
function HookCounterFour() {
    const [items, setitems] = useState([]) //UseState with an empty Array
    const addItem =() =>{
        setitems([...items, {id:items.length, value:Math.floor(Math.random()*10)+1}])
    }
    return (
        <div>
            <button onClick ={addItem}>Add Button</button>
            <ul>
                {
                    items.map(item => <li key={item.id}>{item.value}</li>)
                }
            </ul>
        </div>
    )
}

export default HookCounterFour

