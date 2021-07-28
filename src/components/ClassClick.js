import React, { Component } from 'react'

 class ClassClick extends Component {
     clickHandler=()=>console.log("Clicked on class click me")
    render() {
        return (
            <div>
              <button onClick={this.clickHandler}>  ClickClassMe!!</button>
            </div>
        )
    }
}

export default ClassClick