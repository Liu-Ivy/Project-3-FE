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
    const { title, topic, imageUrl, description, duration, location } = this.state.plan  
  console.log('plan', this.state.plan)
  return (
    <div>
      <Navbar />
      <div className="hero is-fullheight">
        <div className="each-plan">
          <div className="middle-part">
            <div>
            <h2 className="title is-size-2 has-text-white is-uppercase has-text-weight-bold is-family-monospace">{title}</h2>
            <h2 className="title is-size-3 has-text-white is-uppercase has-text-weight-bold is-family-monospace">{topic}</h2>
            </div>
            <div >
              <img className="plan-image" src={imageUrl} alt="" style={style}/>
            </div>
          </div>
        <div className="show-form">
         <label className="label is-marginless">Description</label>
          <p className="description">{description}</p>
          <label className="label is-marginless">Duration</label>
          <p className="duration">{duration} minutes</p> 
          <label className="label is-marginless">Location</label>
          <p className="location">{location}</p>
        </div>
       </div>
      </div>
    </div>
  )
}
}


export default withAuth(EachPlan);