import React from 'react'
import { withAuth } from "../lib/AuthProvider";
import PlanCard from '../card/PlanCard';

function EachTopic(props) {
  // const {image_url, topic, _id} = props.topics
  return (
    <div>
      {/* <a href={`/topics/${_id}`}>
        <img src={image_url} alt=""/>
         <h3>{topic}</h3>
      </a> */}
      EachTopic
      <PlanCard />
    </div>
  )
}

export default withAuth(EachTopic);