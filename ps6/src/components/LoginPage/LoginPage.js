import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      lastName: "",
    };
  }

  saveUser = () => {
    let { userName, lastName } = this.state;
    let userInfo = {
      userName,
      lastName,
    };

    let data = JSON.stringify(userInfo);
    localStorage.setItem("userinfo", data);
  };

  userNameHandler = (e) => {
    this.setState({ userName: e.target.value });
  };

  userLastNameHandler = (e) => {
    this.setState({ lastName: e.target.value });
  };

  render() {
    return (
      <div>
        <label htmlFor="name">User Name: </label>
        <input
          type="text"
          id="name"
          value={this.state.userName}
          onChange={(e) => this.userNameHandler(e)}
        />
        <label htmlFor="lastname">Last Name: </label>
        <input
          type="text"
          id="lastname"
          value={this.state.lastName}
          onChange={(e) => this.userLastNameHandler(e)}
        />
        <nav>
          <Link to="/shopping">
            <button onClick={this.saveUser}>Sign In</button>
          </Link>
        </nav>
      </div>
    );
  }
}
