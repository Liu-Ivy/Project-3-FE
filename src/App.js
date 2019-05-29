import React, { Component } from "react";
import { Switch } from "react-router-dom";

import Home from "./pages/Home"
// import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Topics from "./pages/Topics";

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";
import EachTopic from "./pages/EachTopic";
import EachPlan from "./pages/EachPlan";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="content">
          <Switch>
            <AnonRoute exact path="/" component={Home} />
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute exact path="/topics" component={Topics} />
            <PrivateRoute path="/topics/:topic" component={EachTopic} />
            <PrivateRoute path="/topic/:id" component={EachPlan} />
            <PrivateRoute path="/profile" component={Profile} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
};

export default App;
