import React, { Component } from "react";

class App extends Component {
  state = {
    hello: "hello react World!",
  };

  handleChange = () => {
    this.setState({
      hello: "Oh change messasge",
    });
  };

  countUP = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div className="App">
        <div>{this.state.hello}</div>;
        <button onClick={this.handleChange}>click Me!</button>;
        <div>{this.state.count}</div>
        <button onClick={this.countUp}>count up !</button>
      </div>
    );
  }
}

export default App;
