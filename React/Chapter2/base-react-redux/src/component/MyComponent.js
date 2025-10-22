// class component
// function component
import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "TaiNguyen", age: 35 },
//       { id: 2, name: "Hoang", age: 15 },
//       { id: 3, name: "Khanh", age: 30 },
//     ],
//   };

//   handleAddNewUser = (userObject) => {
//     console.log(">> check data from parents: ", userObject);
//     this.setState({
//       listUsers: [userObject, ...this.state.listUsers],
//     });
//   };

//   handleDeleteUser = (userId) => {
//     let listUsersClone = [...this.state.listUsers];
//     listUsersClone = listUsersClone.filter((item) => item.id !== userId); //array.filter trả về mảng mới thỏa mãn điều kiện bên trong
//     this.setState({
//       listUsers: listUsersClone,
//     });
//   };

//   //JSX
//   render() {
//     return (
//       <>
//         <div className="a">
//           <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
//           <DisplayInfor
//             listUsers={this.state.listUsers}
//             handleDeleteUser={this.handleDeleteUser}
//           />
//         </div>

//         <div className="b"></div>
//       </>
//     );
//   }
// }

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "TaiNguyen", age: 35 },
    { id: 2, name: "Hoang", age: 15 },
    { id: 3, name: "Khanh", age: 30 },
  ]);

  const handleAddNewUser = (userObject) => {
    setListUsers([userObject, ...listUsers]);

    // console.log(">> check data from parents: ", userObject);
    // this.setState({
    //   listUsers: [userObject, ...this.state.listUsers],
    // });
  };

  const handleDeleteUser = (userId) => {
    let listUsersClone = listUsers; //[...listUsers];
    listUsersClone = listUsersClone.filter((item) => item.id !== userId); //array.filter trả về mảng mới thỏa mãn điều kiện bên trong
    setListUsers(listUsersClone);

    // this.setState({
    //   listUsers: listUsersClone,
    // });
  };
  return (
    <>
      <div className="a">
        <AddUserInfor handleAddNewUser={handleAddNewUser} />
        <DisplayInfor
          listUsers={listUsers}
          handleDeleteUser={handleDeleteUser}
        />
      </div>

      <div className="b"></div>
    </>
  );
};

export default MyComponent;
