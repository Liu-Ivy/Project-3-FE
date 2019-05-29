import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import './login.css';

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login({ username, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <Navbar />
         <div className="login-page">
          <form className="form is-overaly has-text-centered single-space is-marginless is-family-monospace" onSubmit={this.handleFormSubmit}>
            <label className="label is-size-4 has-text-weight-normal has-text-white is-normal ">Username: </label>
            <input className="input is-rounded"
              type="text"
              name="username"
              placeholder="username"
              value={username}
              onChange={this.handleChange}
            />
            <label className="label is-size-4 has-text-weight-normal has-text-white is-normal">Password: </label>
            <input className="input is-rounded"
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={this.handleChange}
            />
            <input className="buttonds has-text-white  is-warning is-outlined is-nomral has-text-weight-bold" type="submit" value="Login" />
          <p className="is-size-6 has-text-weight-normal has-text-white">
          Don't have account?
          <Link className="button has-text-white  is-warning is-outlined is-small has-text-weight-bold" to="/signup">Signup</Link>
          </p>
        </form>
         </div>
      </div>
    );
  }
}

export default withAuth(Login);
