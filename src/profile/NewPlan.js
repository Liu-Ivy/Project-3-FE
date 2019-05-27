import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import plan from '../lib/plan-service';

const style = {
  height: '80px',
  width: '100px',
  margin: '10px'
}

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
    console.log(this.props)
    const { title, topic, description, imageUrl, duration, location  } = this.state;
    return (
      <div>  
        <form onSubmit={this.handleFormSubmit}>
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
          <input type="submit" value='submit' />
        </form>
        
      </div>
    );
  }
}

export default withAuth(NewPlan);