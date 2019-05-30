import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import Navbar from "../components/Navbar";
import MyInfo from "../profile/MyInfo";
import NewPlan from "../profile/NewPlan";
import PlanCard from "../card/PlanCard";
import profile from "../lib/profile-service";
import MyPlanCard from "../profile/MyPlanCard";
import UpdatePlan from "../profile/UpdatePlan";
import planService from "../lib/plan-service";
import './profile.css';

class Profile extends Component {
  state = {
    image: '',
    display: false,
    plans: [],
    editIndex: '',
  }
  
  componentDidMount() {
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
  };
  handleDelete = (plan) => {
    planService.deletePlan(plan._id)
    .then(()=>{
      profile.getUserPlan()
      .then((plans)=>{
        plans = plans.data.plans
        this.setState({plans})
      })
    })
  }
  
  render() {
    const {plans} = this.state;
    return (
      <div >
        <Navbar />
        <div className="hero is-fullheight ">
          <div className="profile">
            <div className="add-newplan">
              <MyInfo userInfo={this.props.user}/>
              { this.state.display ? 
              <NewPlan handleSubmitClick={this.handleSubmitClick}/> : <button className="button has-text-white  is-warning is-outlined is-large has-text-weight-bold" to="/signup" style={{width: '300px'}} onClick={this.handleClick}>Add New Plan</button>} 
            </div>
            <div className="my-plans">
              {plans && plans.map((plan,index)=>{
                if( index ===  this.state.editIndex){
                  return <UpdatePlan handleUpdateClick={this.handleUpdateClick} plan={plan}/> 
                }else{
                  return <MyPlanCard plan={plan} handleEdit={this.handleEdit} handleDelete ={this.handleDelete} index={index}/>
                }
              } )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Profile);

