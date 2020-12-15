import React, { Component } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { FormControlLabel } from '@material-ui/core';
export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            topic: 'react',
            birthday: '2017-05-24T10:30',
            gender: ''
        }
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })

    }

    handlePasswrodChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleChangeTopic = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handleBirthdayChange = (event) => {
        this.setState({
            birthday: event.target.value
        })
    }

    handleGenderChange = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.password} ${this.state.topic} ${this.state.birthday} ${this.state.gender}`)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <div>
                        <label>Username</label>
                        <input type='text' value={this.state.username} onChange={this.handleUsernameChange} /><br /><br />
                    </div>
                    <div>
                        <lable>Password</lable>
                        <input type="password" value={this.state.password} onChange={this.handlePasswrodChange} /><br /><br />
                    </div>
                    <div>
                        <label>Topics</label>
                        <select value={this.state.topic} onChange={this.handleChangeTopic}>
                            <option value="react">React</option>
                            <option Value="Nodejs">Nodejs</option>
                            <option value="Javascript">JS</option>
                            <option Value="Html and CSS">Html and CSS</option>
                        </select><br /> <br />
                    </div>
                    <div>
                        <label >Gender</label>
                        <RadioGroup arial-label="gender" value={this.setState.gender} onChange={this.handleGenderChange}>
                            <div className="conatiner">
                                <FormControlLabel value="female" control={<Radio />} label="female" />
                                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                <FormControlLabel value="Others" control={<Radio />} label="Others" />
                            </div>
                        </RadioGroup><br />
                    </div>
                    <div>
                        <label>Date of Biirth</label>
                        <input type="datetime-local" value={this.state.birthday} onChange={this.handleBirthdayChange} /><br /><br />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form

