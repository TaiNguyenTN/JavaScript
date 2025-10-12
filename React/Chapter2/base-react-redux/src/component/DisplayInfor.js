import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

class DisplayInfor extends React.Component {
  state = {
    isShowListUser: true,
  };
  handleShowHide() {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  }
  render() {
    const { listUsers } = this.props;
    console.log(listUsers);
    //const listUsers = this.props.listUsers;
    // console.log(this.props);
    //props => viết tắt properties
    return (
      <div className="display-infor-container">
        {/* <img src={logo} /> */}
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser === true
              ? "Hide list users"
              : "Show list users"}
          </span>
        </div>
        {this.state.isShowListUser === true && (
          <>
            {listUsers.map((user, index) => {
              console.log("Check map users: ", user);
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name is {user.name}</div>
                  <div>My age's {user.age}</div>
                  <div>
                    <button
                      onClick={() => this.props.handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                    <hr />
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
