import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import Navbar from "../components/Navbar";
import topic from '../lib/topic-service';

class Topics extends Component {
  state = {
    topics: [],
  }

  componentDidMount(){
    topic.getAll()
      .then((topics)=>this.setState({topics: topics}))
  }
  render() {
   
    return (
      <div>
        {console.log(this.state)}
        <Navbar />
        <h1>All Topics</h1>
          {this.state.topics.map((topic)=>{
            console.log(topic.topic)
            return <p>{topic.topic}</p>
          })}
      </div>
    );
  }
}

export default withAuth(Topics);