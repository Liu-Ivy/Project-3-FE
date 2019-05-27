import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import Navbar from "../components/Navbar";
import MyInfo from "../profile/MyInfo";
import NewPlan from "../profile/NewPlan";
import PlanCard from "../card/PlanCard";

class Profile extends Component {
  state = {
    image:"",
  }
  render() {
    return (
      <div>
        <Navbar />
        <MyInfo userInfo={this.props.user}/>
        <NewPlan />
        <PlanCard />
      </div>
    );
  }
}

export default withAuth(Profile);


  // location: String,
  // plans: [{type: Schema.Types.ObjectId, ref: 'Plans' }],
