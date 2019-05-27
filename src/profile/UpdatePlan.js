import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import plan from '../lib/plan-service';

const style = {
  height: '80px',
  width: '100px',
  margin: '10px'
}

class UpdatePlan extends Component {
  state = {
    title: this.props.plan.title,
    topic: this.props.plan.topic,
    description:this.props.plan.description,
    imageUrl: this.props.plan.imageUrl,
    duration: 0,
    location: this.props.plan.location,
    // memes: [],
    // disable: true,
  
  };

  handleUpdate = () => {
    const { title, topic, description, imageUrl, duration, location } = this.state;
    const { _id } = this.props.plan
    plan.updatePlan({ title, topic, description, imageUrl, duration, location, _id})
    .then(() => {
      this.props.handleSubmitClick()
    })
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  fileOnchange = (event) => {
    const file = event.target.files[0];
    const uploadData = new FormData()
    uploadData.append('photo', file)
  
    plan.imageUpload(uploadData)
    .then((imageUrl) => {
      console.log('imageUrl', imageUrl)
      this.setState({
        imageUrl,
      })
    })
    .catch((error) => console.log(error))
  }

  render() {
 
    const { title, topic, description, imageUrl, duration, location  } = this.state;
    return (
      <div>  
        <form onSubmit={this.handleUpdate}>
          <label>title </label>
          <input type="text" name="title" value={title} onChange={this.handleChange}/><br/>
          <label type="text" >topic </label>
          <select name="topic" required onChange={this.handleChange}>
            <option value={topic}>Choose a Topic</option>
            <option value="reading">Reading</option>
            <option value="writing">Writing</option>
            <option value="festival">Festival</option>
            <option value="warmup-activities">Warmup Activities</option>
            <option value="HSK">HSK</option>
            <option value="tool-book">Tool Book</option>
           </select> 
          {/* <input type="topic" name="topic" value={topic} onChange={this.handleChange}/><br/> */}
          <label>description </label>
          <input type="description" name="description" value={description} onChange={this.handleChange}/><br/>
          <label>duration </label>
          <input type="duration" name="duration" value={duration} onChange={this.handleChange}/><br/>
          <label>location </label>
          <input type="location" name="location" value={location} onChange={this.handleChange}/><br/>
          
          <label>Image</label>
          <input type="file" onChange={this.fileOnchange}></input>
          <img src={this.state.imageUrl} alt="" style={style}/>
          
          {/* {disable ? <input type="submit" disabled></input> : <input type="submit"></input>} */}
          <input type="submit" value='update'/>
        </form>
        
      </div>
    );
  }
}

export default withAuth(UpdatePlan);