import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import './home.css';

class Home extends Component {
  render() {
   
    return (
      <div className="hero is-fullheight">
        <div className='home-body is-family-monospace'>
          <div className="is-overaly has-text-centered single-space">
            <h2 className="subitile is-size-3 has-text-weight-normal has-text-white">Welcome</h2>
            <h1 className="title is-size-2 has-text-white is-uppercase has-text-weight-bold">Teacher's Pandora<br/>中 文</h1>
            <Link className="button has-text-white  is-warning is-outlined is-large has-text-weight-bold" to="/login">Login</Link>
            <Link className="button has-text-white  is-warning is-outlined is-large has-text-weight-bold" to="/signup">SignUp</Link>
          </div>
        </div>
           
      </div>
    );
  }
}

export default withAuth(Home);