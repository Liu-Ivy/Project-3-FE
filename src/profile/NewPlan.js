import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import plan from '../lib/plan-service';
import './new-plan.css'

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
    console.log("object")
    event.preventDefault();
    const { title, topic, description, imageUrl, duration, location } = this.state;
    plan.createPlan({ title, topic, description, imageUrl, duration, location })
    .then(() => {
      this.props.handleSubmitClick()
    })
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
 
    const { title, topic, description, imageUrl, duration, location  } = this.state;
    return (
      <div className="form-control">  
        <form onSubmit={this.handleFormSubmit}>
        <div className="field is-marginless is-paddingless">
          <label className="label is-marginless">Title</label>
            <div className="control">
              <input className="input" type="text" value={title} onChange={this.handleChange}/>
            </div>
        </div>
        <div className="field has-addons is-marginless is-paddingless">
          <div className="control is-expanded">
            <label className="label is-marginless">Topic</label>
            <div className="select">
              <select name="topic" required onChange={this.handleChange}>
                <option value={topic}>Choose a Topic</option>
                <option value="reading">Reading</option>
                <option value="writing">Writing</option>
                <option value="festival">Festival</option>
                <option value="warmup-activities">Warmup Activities</option>
                <option value="HSK">HSK</option>
                <option value="tool-book">Tool Book</option>
              </select>
            </div>
          </div>
        </div>
          {/* <input type="topic" name="topic" value={topic} onChange={this.handleChange}/><br/> */}
        <div className="field is-marginless is-paddingless">
          <label className="label is-marginless">Description</label>
            <div className="control">
              <input className="textarea" type="description" name="description" value={description} onChange={this.handleChange}/><br/>
            </div>
        </div>
        <div className="field is-marginless is-paddingless">
          <label className="label is-marginless">Duration </label>
            <div>
              <input className="input" type="duration" name="duration" value={duration} onChange={this.handleChange}/><br/>
            </div>  
          </div>  
        <div className="field is-marginless is-paddingless">
          <label className="label is-marginless">Location </label>
            <div>
              <input className="input" type="location" name="location" value={location} onChange={this.handleChange}/><br/>
            </div>
        </div>
        <div>
          <label className="label is-marginless">Image</label>
          <input className="button is-info is-warning is-normal" style={{width: '400px'}} type="file" onChange={this.fileOnchange}></input>
          <img className="plan-img"src={this.state.imageUrl} alt="" style={style}/>  
          {/* {disable ? <input type="submit" disabled></input> : <input type="submit"></input>} */}
          <input className="button is-warning is-outlined is-normal" type="submit" value='submit'/>
        </div>
          
        </form>
        
      </div>
    );
  }
}

export default withAuth(NewPlan);