import React, { Component } from 'react'

 class LifecycleB extends Component {
constructor(props) {
    super(props)

    this.state = {
         name : 'AmitSingh'
    }
    console.log('LifecycleB constructor');
}
static getDerivedStateFromProps(props,state){
    console.log('LifecycleB getDerivedStateFromProps')
    return null
}


getSnapshotBeforeUpdate(){
    console.log('LifecycleB getDerivedStateFromProps')
    return null
}
shouldComponentUpdate(){
    console.log('LifecycleB getSnapshotBeforeUpdate')
    return true;
}
componentDidUpdate()
{
    console.log('LifecycleB componentDidUpdate')
}

    render() {
        console.log('LifecycleB render')
        return (
            <div>
                LifecycleB
            </div>
        )
    }
}

export default LifecycleB
