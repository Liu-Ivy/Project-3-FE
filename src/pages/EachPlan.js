import React from 'react'
import Navbar from "../components/Navbar";
import { withAuth } from "../lib/AuthProvider";
import planService from "../lib/plan-service";
import './each-plan.css';



const style = {
  height: '220px',
  width: '320px',
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
    <div>
      <Navbar />
      <div className="hero is-fullheight">
        <div className="each-plan">
          <div>
            <h2 className="title is-size-2 has-text-white is-uppercase has-text-weight-bold is-family-monospace">{title}</h2>
            <h2 className="title is-size-3 has-text-white is-uppercase has-text-weight-bold is-family-monospace">{topic}</h2>
          </div>
        <div >
          <img className="plan-image" src={imageUrl} alt="" style={style}/>
        </div>
        <div>
          <p>{description}</p>    
          <p>{duration}</p> 
        </div>
       </div>
      </div>
    </div>
  )
}
}


export default withAuth(EachPlan);