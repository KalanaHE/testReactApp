import React, { Component } from 'react';
import Counter from './counter';

class counters extends Component {
  state = {
    counter: [
      { id: 1, value: 6 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 100 },
    ],
  };


  handleDelete = (counterId) =>{
      const counter = this.state.counter.filter(c => c.id !== counterId);
      this.setState({counter: counter});
  }

  handleReset = () =>{
      const counters = this.state.counter.map(c => {
          c.value =0;
          return c;
      });

      this.setState({counters});
  }

  render() {
    return (
      <div>

        <button onClick={this.handleReset} className="btn btn-warning btn-sm m-2">Reset</button>

        {this.state.counter.map((count) => (
          <Counter
            key={count.id}
            counter={count}
            onDelete={this.handleDelete}
          >
            <h4>Counter #{count.id} </h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default counters;