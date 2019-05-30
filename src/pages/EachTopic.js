import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import PlanCard from '../card/PlanCard';
import plan from '../lib/plan-service';
import Navbar from "../components/Navbar";
import './eachTopic.css';



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
      <div className="each-topic column"> 
        <div className="column">
          <Navbar />
        </div>
        <div className="column">
          <h2 className="title is-size-1 has-text-white is-uppercase has-text-weight-bold is-family-monospace">{this.props.match.params.topic.toUpperCase()}</h2>
        </div>
        <div className="PlanCard column">
          {plans.map((plan) => {
          if( plan.topic.toLowerCase() === this.props.match.params.topic) {
          return <PlanCard plan={plan} />
          } else {
            return null
          }})}
        </div>
      </div>
    );

  }
}

export default withAuth(EachTopic);
