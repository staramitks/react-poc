import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faPlay } from '@fortawesome/free-solid-svg-icons'

class MyTable extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="container" >
                <div className="alert alert-success" role="alert">
                        <h4> Configure Database for {this.props.environment}</h4>
                </div>

                <table>
                <tr>
                    <th> Database Name</th>
                    <th> Configure</th>
                    <th> Status</th>
                </tr>
                <tr>
                    <td>Global Equity Database</td>
                    <td><FontAwesomeIcon icon={faPlay} /> </td>
                    <td> Pending </td>
                </tr>
                <tr>
                    <td>Product Database</td>
                    <td><FontAwesomeIcon icon={faCoffee} /> </td>
                    <td> Pending </td>
                </tr>
                <tr>
                    <td>Data Management Database</td>
                    <td><FontAwesomeIcon icon={faCoffee} /> </td>
                    <td> Pending </td>
                </tr>
                <tr>
                    <td>CIMP Database</td>
                    <td><FontAwesomeIcon icon={faCoffee} /> </td>
                    <td> Pending </td>
                </tr>
                </table>
                
            </div>
        )
    }
}

export default MyTable
