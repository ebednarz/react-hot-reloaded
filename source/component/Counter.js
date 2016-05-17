import React, { Component, PropTypes } from 'react';

class Counter extends Component {
  componentDidMount() {
    this.interval = setInterval(this.props.increment, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h2>Counter: {this.props.counter}</h2>
   );
  }
}

Counter.propTypes = {
  counter: PropTypes.number,
  increment: PropTypes.func,
};

export default Counter;
