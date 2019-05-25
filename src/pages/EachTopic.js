import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import PlanCard from '../card/PlanCard';

class EachTopic extends Component {
  state = {
    plans: []
  }
  render() {
    // const {image_url, topic, _id} = props.topics
    return (
      <div>
        
        <PlanCard />
      </div>
    );

  }
}

export default withAuth(EachTopic);
