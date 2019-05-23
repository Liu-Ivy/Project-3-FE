import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Navbar extends Component {

  // declare a method
      // inside this method call this.props.logout
      handleOnClick = () => {
        console.log("click")
        this.props.logout();
      };
  
  
  render() {
    // const { isLoggedin } = this.props;
    return (
      <div>
        {/* {isLoggedin ? (
          <>
            <p>username: {user.username}</p>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <> */}
            <Link to="/topics">View All</Link>
            <Link to="/profile">My Profile</Link>
      
            <div onClick={()=>{this.handleOnClick()}}>log out</div>
         
          {/* </>
        )} */}
      </div>
    );
  }
}

export default withAuth(Navbar);
