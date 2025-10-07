// class component
// function component
import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Nguyen Quoc Tai",
    address: "Hoi Dan IT",
    age: 18,
  };

  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address} and I'm{" "}
        {this.state.age} years old.
      </div>
    );
  }
}

export default MyComponent;
