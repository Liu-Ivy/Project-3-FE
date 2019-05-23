import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import Navbar from "../components/Navbar";

class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Welcome {this.props.user.username}</h1>
      </div>
    );
  }
}

export default withAuth(Profile);
