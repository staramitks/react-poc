import React from 'react';

class ExampleCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    componentDidMount() {
      console.log(`You Mount clicked ${this.state.count} times`);
    }
    componentDidUpdate() {
        console.log(`You componentDidUpdate clicked ${this.state.count} times`);
    }
  
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me -Class
          </button>
        </div>
      );
    }
  }

  export default ExampleCounter