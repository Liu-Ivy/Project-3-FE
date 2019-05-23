import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Home extends Component {
  render() {
   
    return (
      <div>
          <h1>Welcome Teachers</h1>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          
      </div>
    );
  }
}

export default withAuth(Home);