import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import Navbar from "../components/Navbar";
import topic from '../lib/topic-service';
import TopicCard from "../card/TopicCard";


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
            return <TopicCard topic={topic.topic} image={topic.image} />
          })}
          
      </div>
    );
  }
}

export default withAuth(Topics);