import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import Navbar from "../components/Navbar";
import MyInfo from "../profile/MyInfo";
import NewPlan from "../profile/NewPlan";
import PlanCard from "../card/PlanCard";
import profile from "../lib/profile-service";
import MyPlanCard from "../profile/MyPlanCard";
import UpdatePlan from "../profile/UpdatePlan";

class Profile extends Component {
  state = {
    image: '',
    display: false,
    plans: [],
    editIndex: '',
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
  handleEdit = (index) => {
    this.setState({ editIndex : index}) 
  }
  handleUpdateClick = () =>{

  }
  
  render() {

    const {plans} = this.state;
    return (
      <div>
        <Navbar />
        <MyInfo userInfo={this.props.user}/>
         { this.state.display ? 
          <NewPlan handleSubmitClick={this.handleSubmitClick}/> : <button onClick={this.handleClick}>Add New Plan</button>} 
        <div className='my-plans'>
        {plans && plans.map((plan,index)=>{
          if( index ===  this.state.editIndex){
            return <UpdatePlan handleUpdateClick={this.handleUpdateClick} plan={plan}/> 
          }else{
            return <MyPlanCard plan={plan} handleEdit={this.handleEdit} handleDelet={this.handleDelet} index={index}/>
          }
         } )}

       
        </div>
      </div>
    );
  }
}

export default withAuth(Profile);


  // location: String,
  // plans: [{type: Schema.Types.ObjectId, ref: 'Plans' }],
