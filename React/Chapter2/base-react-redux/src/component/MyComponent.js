// class component
// function component
import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "TaiNguyen",
    address: "Hoi Dan IT",
    age: 18,
  };

  handleClick(event) {
    console.log(">>> Click me my button");

    this.setState({
      name: "Eric",
      age: Math.floor(Math.random() * 100 + 1),
    });
  }

  handleOnMoveOver(event) {
    // console.log(event.pageX);
  }

  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address} and I'm{" "}
        {this.state.age} years old.
        <button onClick={(event) => this.handleClick(event)}>Click me</button>
        <button onMouseMove={this.handleOnMoveOver}>Hover me</button>
      </div>
    );
  }
}

export default MyComponent;
