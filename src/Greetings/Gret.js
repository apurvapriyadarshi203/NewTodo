import React, { Component } from 'react'
import  '../Greetings/Greet.css'

export class Gret extends Component {
    render() {
        let curDate = new Date()
        curDate = curDate.getHours()
        let greeting = '';
        const cssStyle = {}

        if (curDate >= 1 && curDate < 12) {
            greeting = 'Good Morning'
            cssStyle.color = 'red'
        }
        else if (curDate >= 12 && curDate < 17) {
            greeting = 'Good Afternoon'
            cssStyle.color ='yellow'
        }
        else if (curDate >= 17 && curDate <= 19) {
            greeting = 'Good Evening'
            cssStyle.color = 'lightgray'
        }
        else {
            greeting = 'Good Night'
            cssStyle.color = 'black'
        }
        return (
            <div className ='body'>
                <div className = 'greets'>
                <h1 className ='head'>Hello Sir ,<span style ={cssStyle}>{greeting}</span></h1>
                </div>
            </div>
        )
    }
}

export default Gret
