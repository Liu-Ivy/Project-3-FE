import React from 'react'

import { withAuth } from "../lib/AuthProvider";

class EachPlan extends React.Component {
  // const { topic, image, description, duration } = props
  staste = {
    plan: {}
  }
  componentDidMount(){
    // topic.getAll()
    //   .then((topics)=>this.setState({topics: topics}))
  }
render(){

  return (
    <div className="planeCard">
      {/* <h2>{topic}</h2>
      <img src={image} alt=""/>
      <p>{description}</p>    
      <p>{duration}</p>  */}
      <h2>EachPlan</h2>
    </div>
  )
}
}


export default withAuth(EachPlan);