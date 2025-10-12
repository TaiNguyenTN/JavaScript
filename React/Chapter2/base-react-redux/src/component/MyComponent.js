// class component
// function component
import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "TaiNguyen", age: 35 },
      { id: 2, name: "Hoang", age: 15 },
      { id: 3, name: "Khanh", age: 30 },
    ],
  };

  handleAddNewUser = (userObject) => {
    console.log(">> check data from parents: ", userObject);
    this.setState({
      listUsers: [userObject, ...this.state.listUsers],
    });
  };

  //JSX
  render() {
    return (
      <div>
        <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
