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
  
  componentDidUpdate() {
    console.log('this.props', this.props)
  }
  handleClick = () => {
    const { display } = this.state
    this.setState({ display: !display})
  }
  
  handleSubmitClick = () => {
    const { display } = this.state
    this.setState({ display: !display })
    profile.getUserPlan()
      .then((dataPlan)=>{
        this.setState({ plans: dataPlan })
      })
      .then(() => {
        console.log('this.state.plans', this.state.plans)
      })
  }
  
  render() {
    console.log('this.props.user', this.props.user)
    return (
      <div>
        <Navbar />
        <MyInfo userInfo={this.props.user}/>
        
         { this.state.display ?<NewPlan handleSubmitClick={this.handleSubmitClick}/> : <button onClick={this.handleClick}>Add New Plan</button>} 
        <div className='my-plans'>

        </div>

        {/* <PlanCard data={data}/> */}
      </div>
    );
  }
}

export default withAuth(Profile);


  // location: String,
  // plans: [{type: Schema.Types.ObjectId, ref: 'Plans' }],
