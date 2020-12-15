import React, { useState } from 'react'

function HookCounterThree() {
    const [name, setname] = useState({ firstName: '', lastName: '' })
    return (
        <form>
            <label>First Name</label>
            <input type="text" value={name.firstName} onChange={e => setname({ ...name, firstName: e.target.value })} />
            <label>Last Name</label>
            {/* Spread Operator */}
            <input type="text" value={name.lasName} onChange={e => setname({ ...name, lastName: e.target.value })} /> 
            <h2>your first name is : {name.firstName}</h2>
            <h2>Your Last name is:  {name.lastName}</h2>
        </form >
    )
}

export default HookCounterThree
