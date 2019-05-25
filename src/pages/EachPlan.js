import React from 'react'

import { withAuth } from "../lib/AuthProvider";
import planService from "../lib/plan-service";


class EachPlan extends React.Component {
  // const { topic, image, description, duration } = props
  state = {
    plan: {}
  }
  componentDidMount(){
    planService.getPlan(this.props.match.params.id)
      .then((onePlan)=>this.setState({plan: onePlan}))
  }
render(){

  console.log('plan', this.state.plan)
  return (
    <div className="planeCard">
      <h2>{this.state.plan.title}</h2>

      {/* <h2>{topic}</h2>
      <img src={image} alt=""/>
      <p>{description}</p>    
      <p>{duration}</p>  */}
    </div>
  )
}
}


export default withAuth(EachPlan);