import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import PlanCard from '../card/PlanCard';
import plan from '../lib/plan-service';
import Navbar from "../components/Navbar";

class EachTopic extends Component {
  state = {
    plans: []
  }

  componentDidMount(){
    plan.getAllPlans()
      .then((dataPlan)=>this.setState({plans: dataPlan}))
  }

  render() {
    const { plans } = this.state;
    console.log(this.props.match.params.topic)
    // const {image_url, topic, _id} = props.topics
    return (
      <div>
        <Navbar />
        <h2>{this.props.match.params.topic.toUpperCase()}</h2>
        {plans.map((plan) => {
         if( plan.topic.toLowerCase() === this.props.match.params.topic) {
         return <PlanCard data={plan} />
        } else {
          return null
        }})}
      </div>
    );

  }
}

export default withAuth(EachTopic);
