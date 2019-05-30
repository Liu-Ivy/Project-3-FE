import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import Navbar from "../components/Navbar";
import "./signup.css";

class Signup extends Component {
  state = {
    username: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.signup({ username, password });
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
          <div className="signup-page">
            <form className="form is-overaly has-text-centered single-space is-marginless is-family-monospace" onSubmit={this.handleFormSubmit}>
              <label className="control is-size-4 has-text-weight-normal has-text-white is-normal">Username:</label>
              <input className="input is-rounded is-hovered"
                type="text"
                name="username"
                placeholder="username"
                value={username}
                onChange={this.handleChange}
              />
              <label className="is-size-4 has-text-weight-normal has-text-white is-normal" >Password:</label>
              <input className="input is-rounded"
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={this.handleChange}
              />
              <input className="button has-text-white  is-warning is-outlined is-nomral has-text-weight-bold" type="submit" value="Signup" />
                <p className="is-size-6 has-text-weight-normal has-text-white">
                  Already have account?
                <Link className="button has-text-white  is-warning is-outlined is-small has-text-weight-bold" to={"/login"}> Login</Link>
                </p>
            </form>
          </div>
          <footer class="hero-foot">
            <div id="grid">

            </div>
          </footer>
      </div>
    );
  }
}

export default withAuth(Signup);
