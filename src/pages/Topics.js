import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import Navbar from "../components/Navbar";
import topic from '../lib/topic-service';
import TopicCard from "../card/TopicCard";
import './topics.css';


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
        <div className="all-topics column">
          <div className="column">
            <Navbar />
          </div>
          <div className="hero is-fullheight">
          <div className="cloumn">
          <h1 className="title is-size-1 has-text-white is-uppercase has-text-weight-bold is-family-monospace ">All Topics</h1>
          </div>
          <div className="topic-card column is-family-monospace">
            <div className="columns is-multiline is-mobile is-half">
            {this.state.topics.map((topic)=>{
              return <TopicCard className="column " topic={topic.topic} image={topic.image} />
            })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Topics);