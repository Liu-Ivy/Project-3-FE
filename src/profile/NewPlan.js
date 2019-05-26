import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import plan from '../lib/plan-service';

class NewPlan extends Component {
  state = {
    title: "",
    topic: "",
    description:"",
    imageUrl: "",
    duration: 0,
    location: "",
    // memes: [],
    // disable: true,

  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { title, topic, description, imageUrl, duration, location } = this.state;
    plan.createPlan({ title, topic, description, imageUrl, duration, location });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { title, topic, description, imageUrl, duration, location  } = this.state;
    return (
      <div>  
        <form onSubmit={this.handleFormSubmit}>
          <label>title </label>
          <input type="text" name="title" value={title} onChange={this.handleChange}/><br/>
          <label>topic </label>
          <input type="topic" name="topic" value={topic} onChange={this.handleChange}/><br/>
          <label>description </label>
          <input type="description" name="description" value={description} onChange={this.handleChange}/><br/>
          <label>duration </label>
          <input type="duration" name="duration" value={duration} onChange={this.handleChange}/><br/>
          <label>location </label>
          <input type="location" name="location" value={location} onChange={this.handleChange}/><br/>
          
          {/* <label>Image</label>
          <input type="file" onChange={this.fileOnchange}></input> */}
          {/* {disable ? <input type="submit" disabled></input> : <input type="submit"></input>} */}
          <input type="submit" value='submit' />
        </form>
        
      </div>
    );
  }
}

export default withAuth(NewPlan);