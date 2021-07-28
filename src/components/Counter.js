import React, { Component } from 'react'

class Counter extends Component {

    constructor(props)
    {
        super(props)
        this.state ={
            count: 0
    }

   
    }

    incrementCounter()
    {
        let initialCount=this.state.count;
        this.setState(prevState=>({
            count: prevState.count+1
        }))
}

    decrementCounter()
    {
        let initialCount=this.state.count;
        this.setState(prevState=>({
            count: prevState.count-1
        }))
    }



    render() {
        return (
            <div>
                <div> Count = {this.state.count}</div>
                <button onClick={()=>this.incrementCounter()}>Increment</button>
                <button  onClick={()=>this.decrementCounter()}> Decrement</button>
                

                
            </div>
        )
    }
}


export default Counter