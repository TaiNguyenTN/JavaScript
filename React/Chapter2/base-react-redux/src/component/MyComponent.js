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

  handleOnChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address} and I'm{" "}
        {this.state.age} years old.
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" onChange={(event) => this.handleOnChange(event)} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
