import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import Navbar from "../components/Navbar";

class Topics extends Component {
  render() {
   
    return (
      <div>
        <Navbar />
        <h1>All Topics</h1>
        <Link to="/:topic">{this.props.topic}</Link>
          
      </div>
    );
  }
}

export default withAuth(Topics);