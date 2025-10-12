import React from "react";

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
      <div>
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
          <div>
            {listUsers.map((user, index) => {
              console.log("Check map users: ", user);
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name is {user.name}</div>
                  <div>My age's {user.age}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
