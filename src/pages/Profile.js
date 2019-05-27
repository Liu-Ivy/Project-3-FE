import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import Navbar from "../components/Navbar";
import MyInfo from "../profile/MyInfo";
import NewPlan from "../profile/NewPlan";
import PlanCard from "../card/PlanCard";
import profile from "../lib/profile-service";

class Profile extends Component {
  state = {
    image: "",
    display: true,
    plans: [],
  }
  
  componentDidMount() {
    console.log("mounting")
    profile.getUserPlan()
      .then((plans)=>{
        plans = plans.data.plans
        this.setState({plans})
      })
  }
  handleClick = () => {
    const { display } = this.state
    this.setState({ display: !display})
  }
  
  handleSubmitClick = () => {
    const { display } = this.state
    profile.getUserPlan()
      .then((plans)=>{
        plans = plans.data.plans
        this.setState({
          display: !display,
          plans})
      })
   
  }
  
  render() {

    const {plans} = this.state;
    return (
      <div>
        <Navbar />
        <MyInfo userInfo={this.props.user}/>
        
         { this.state.display ?<NewPlan handleSubmitClick={this.handleSubmitClick}/> : <button onClick={this.handleClick}>Add New Plan</button>} 
        <div className='my-plans'>

        </div>

        {plans && plans.map((plan)=>{
          return <PlanCard data={plan}/>
        } )}
      </div>
    );
  }
}

export default withAuth(Profile);


  // location: String,
  // plans: [{type: Schema.Types.ObjectId, ref: 'Plans' }],
