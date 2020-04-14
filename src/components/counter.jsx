import React, { Component } from "react";

class Counter extends Component {
  state = { count: this.props.counter.value };


  handleCounter = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecCounter = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {

    console.log('props', this.props);

    return (
      <React.Fragment>
        {this.props.children}
        <span className={this.getBadgeColor()}>{this.formatCount()}</span>
        <button
          onClick={this.handleCounter}
          className="btn btn-secondary btn-sm m-2"
        >
          Increase
        </button>
        <button
          onClick={this.handleDecCounter}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrease
        </button>
        <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)} >Delete</button>
        <br></br>
        {/* <ul>
              { this.state.tags.map(tag =><li key={tag}>{tag}</li>) }
            </ul> */}
      </React.Fragment>
    );
  }

  getBadgeColor() {
    let label = "badge m-2 badge-";
    label += this.state.count === 0 ? "warning" : "primary";
    return label;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
