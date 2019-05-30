import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import './navbar.css';

class Navbar extends Component {

      handleOnClick = () => {
        //console.log("click")
        this.props.logout();
      };  
  render() {
    return (
      <nav className="navbar">
        <div className="nav-head">
          <div className="columns is-mobile is-marginless is-paddingless heading has-text-weight-bold has-text-black init">
            <div className="column is-text-center is-marginless left">
              <Link to="/">Teacher's Pandora</Link>
            </div>
            <div className="columns column is-marginless center desktop">
              <Link className="navbar-item column-center is-size-7 has-text-black is-one-third" is-flex-desktop-only to="/">Home</Link>
              <Link className="navbar-item column-center is-size-7 has-text-black" to="/topics">View All</Link>
              <Link className="navbar-item column-center is-size-7 has-text-black" to="/profile">My Profile</Link>
            </div>  
            <div className="columns column right is-marginless is-paddingless">
              <div className="navbar-item desktop has-text-black is-size-7" onClick={()=>{this.handleOnClick()}}>log out</div>
            </div>  
          </div>

        </div>
       
      </nav>
    );
  }
}

export default withAuth(Navbar);
// style={{background:}} 
