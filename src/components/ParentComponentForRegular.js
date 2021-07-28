import React, { Component } from 'react'
import RegularComponent from './RegularComponent'
import Purecom from './Purecom'
 class ParentComponentForRegular extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: "AmitSingh"
        }
    }

    componentDidMount(){
        setInterval( ()=>{
            this.setState({
                name: 'AmitSingh'
            })
        },2000)
    }
    
    render() {
        return (
            <div>
                Parent Component ForRegular
                <RegularComponent name={this.state.name}></RegularComponent>
                <Purecom name={this.state.name}></Purecom >
            </div>
        )
    }
}

export default ParentComponentForRegular
