import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

const DisplayInfor = (props) => {
  const { listUsers } = props;

  const [isShowHideListUser, setShowHideListUser] = useState(true);
  //isShowHideListUser: đây là tên của state ở được giá trị đang được gán bởi useState(true)
  //setShowHideListUser: đây là 1 function dùng để change the value of isShowHideListUser.
  //~~ this.state = {
  //   isShowHideListUser: true
  // }
  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };

  console.log(">>> Call me render");
  //Tất cả những cái gì làm ảnh hưởng đến ứng dụng của các bạn thì nên để trong useEffect
  useEffect(() => {
    if (listUsers.length === 0) {
      alert("You deleted all the users");
    }
    console.log(">>> Call me useEffect");
  }, []);

  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser === true ? "Hide list users" : "Show list users"}
        </span>
      </div>
      {isShowHideListUser && (
        <>
          {listUsers.map((user, index) => {
            // console.log("Check map users: ", user);
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>My name is {user.name}</div>
                <div>My age's {user.age}</div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
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
};

export default DisplayInfor;
