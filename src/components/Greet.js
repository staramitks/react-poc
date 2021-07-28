import React, { Component } from 'react';

class Greet extends React.Component{
render()
    {
        const {name, heroName, children} = this.props
        return (<div><h2><font color="blue"> This is from Greet Class Component, Name is {name} aka {heroName}</font></h2> {children}
        </div>)
    }

}


export default Greet