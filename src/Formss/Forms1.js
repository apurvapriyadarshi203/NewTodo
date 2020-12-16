import React, { useState } from 'react'
import '../Formss/Forms1.css'

function Forms1() {
    const [name, setname] = useState("")
    const [fullName, setfullName] = useState("")

    const inputEvent = (event) => {
        console.log(event.target.value)
        setname(event.target.value)
    };

    const onSubmit = () => {
        setfullName(name)
    }
    return (
        <div>
            <div className="cen">
                <div className="head">Hello {fullName} </div>
                <div className="writee">
                    <input type="text" 
                    placeholder="Enter Your Name"
                     onChange={inputEvent} 
                     value={name} />
                </div>
                <div className="bt">
                    <button onClick={onSubmit}>Click Me </button>
                </div>
            </div>
        </div>
    )
}

export default Forms1
