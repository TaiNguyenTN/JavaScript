import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//   state = {
//     name: "",
//     address: "Hoi Dan IT",
//     age: "",
//   };

//   handleOnChangeName(event) {
//     this.setState({
//       name: event.target.value,
//     });
//   }

//   handleOnSubmit(event) {
//     event.preventDefault(); //chặn reload browser

//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100) + 1 + "-random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   }

//   handleOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };

//   render() {
//     return (
//       <div>
//         My name is {this.state.name} and I'm from {this.state.address} and I'm
//         {this.state.age} years old.
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <label>Your name:</label>
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => this.handleOnChangeName(event)}
//           />

//           <label>Your age:</label>
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(event) => this.handleOnChangeAge(event)}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const AddUserInfor = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("Hoi Dan IT");
  const [age, setAge] = useState("");

  const handleOnChangeName = (event) => {
    setName(event.target.value);

    // this.setState({
    //   name: event.target.value,
    // });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault(); //chặn reload browser

    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100) + 1 + "-random",
      name: name,
      age: age,
    });
  };

  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
    // this.setState({
    //   age: event.target.value,
    // });
  };

  return (
    <div>
      My name is {name} and I'm from {address} and I'm {age} years old.
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your name:</label>
        <input
          value={name}
          type="text"
          onChange={(event) => handleOnChangeName(event)}
        />

        <label>Your age:</label>
        <input
          value={age}
          type="text"
          onChange={(event) => handleOnChangeAge(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfor;
