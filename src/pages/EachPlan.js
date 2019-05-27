import React from 'react'
import Navbar from "../components/Navbar";
import { withAuth } from "../lib/AuthProvider";
import planService from "../lib/plan-service";



const style = {
  height: '80px',
  width: '100px',
  margin: '10px'
}

class EachPlan extends React.Component {
  state = {
    plan: {}
  }
  componentDidMount(){
    planService.getPlan(this.props.match.params.id)
    .then((onePlan)=>this.setState({plan: onePlan}))
  }
  render(){
    const { title, topic, imageUrl, description, duration } = this.state.plan  
  console.log('plan', this.state.plan)
  return (
    <div className="planeCard">
      <Navbar />
      <h2>{title}</h2>
      <h2>{topic}</h2>
      <img src={imageUrl} alt="" style={style}/>
      <p>{description}</p>    
      <p>{duration}</p> 

    </div>
  )
}
}


export default withAuth(EachPlan);