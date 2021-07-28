import React, { PureComponent } from 'react'

// Only works with class based components
// Only renders when there is a change in state or props
// React.memo is to functional based components
class Purecom extends PureComponent {
    render() {
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default Purecom
