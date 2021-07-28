import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

 class LifecycleA extends Component {
constructor(props) {
    super(props)

    this.state = {
         name : 'AmitSingh'
    }
    this.changeState=this.changeState.bind(this)
    console.log('LifecycleA constructor');
}
static getDerivedStateFromProps(props,state){
    console.log('LfecycleA getDerivedStateFromProps')
    return null
}

getSnapshotBeforeUpdate(){
    console.log('LfecycleA getDerivedStateFromProps')
}
shouldComponentUpdate(){
    console.log('LfecycleA getSnapshotBeforeUpdate')
    return true;
}
componentDidUpdate()
{
    console.log('LfecycleA componentDidUpdate')
}

changeState = () =>{
    this.setState({
        name: 'Codevolution'
    })
}
    render() {
        console.log('LfecycleA render')
        return (
            <div>
            <div>LifeCycleA</div>
            <button onClick={this.changeState}> Change State</button>
            <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
