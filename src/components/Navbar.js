import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import './navbar.css';

class Navbar extends Component {
 // declare a method
 // inside this method call this.props.logout
      handleOnClick = () => {
        console.log("click")
        this.props.logout();
      };  
  render() {
    return (
      <nav className="navbar">
        <div className="nav-head">
          <div className="columns is-mobile is-marginless is-paddingless heading has-text-weight-bold has-text-black init">
            <div className="columns column-center is-marginless left desktop">
              <Link to="/">Teacher's Pandora</Link>
            </div>
            <div className="columns  column is-marginless center">
              <Link className="navbar-item column-center is-size-7 has-text-black is-one-third" to="/">Home</Link>
              <Link className="navbar-item column-center is-size-7 has-text-black" to="/topics">View All</Link>
              <Link className="navbar-item column-center is-size-7 has-text-black" to="/profile">My Profile</Link>
            </div>  
            <div className="columns column is-marginless is-paddingless right ">
              <div className="navbar-item desktop has-text-black is-size-7" onClick={()=>{this.handleOnClick()}}>log out</div>
                <figure class="navbar-item image has-text-black is-size-7">
                  <i class="fas fa-bars"></i>
                </figure>
              <div className="navbar-item has-text-black">Hambuger</div>
            </div>  
          </div>

        </div>
       
      </nav>
    );
  }
}

export default withAuth(Navbar);
