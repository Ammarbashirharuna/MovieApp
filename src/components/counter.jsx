import { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.counter.value,
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    // button for increasing the button numbers
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary mt-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.Counter.id)}
          className="btn btn-danger btn-sm m-2">
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count == 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count == 0 ? "Zero" : count;
  }
}

export default Counter;
