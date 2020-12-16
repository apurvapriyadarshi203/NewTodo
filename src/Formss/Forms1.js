import React, { useState } from 'react'
import '../Formss/Forms1.css'

function Forms1() {
    const [fullname, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: ""
    })

    const inputEvent = (event) => {
        console.log(event.target.value)
        // setFullName(event.target.value)
        const value = event.target.value
        const name = event.target.name
        setFullName((preValue) => {
            // console.log(preValue)
            if (name === 'fName') {
                return {
                    fname: value,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone: preValue.phone
                }
            }
            else if (name === 'lName') {
                return {
                    fname: preValue.fname,
                    lname: value,
                    email: preValue.email,
                    phone: preValue.phone
                }
            }
            else if (name === 'email') {
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: value,
                    phone: preValue.phone
                }
            }
            else if (name === 'phone') {
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone: value
                }
            }
        })

    };

    const onSubmit = event => {
        event.preventDefault();
    }
    return (
        <div>
            <div className="cen">
                <div className="head">Hello {fullname.fname} {fullname.lname} {fullname.email} {fullname.phone} </div>
                <div className="writee">
                    <input type="text"
                        placeholder="Enter Your First Name"
                        name="fName"
                        onChange={inputEvent}
                        value={fullname.fname} />

                    <input type="text"
                        placeholder="Enter Your Last Name"
                        name="lName"
                        onChange={inputEvent}
                        value={fullname.lname} />

                    <input type="text"
                        placeholder="Enter Your Email"
                        name="email"
                        onChange={inputEvent}
                        value={fullname.email} />

                    <input type="text"
                        placeholder="Enter Your Phone Number"
                        name="phone"
                        onChange={inputEvent}
                        value={fullname.phone} />
                </div>
                <div className="bt">
                    <button onClick={onSubmit}>Click Me </button>
                </div>
            </div>
        </div>
    )
}

export default Forms1
