import React from 'react'
import { withAuth } from "../lib/AuthProvider";

function EachPlan(props) {
  return (
    <div>
      {/* <a href={`/topics/${_id}`}>
        <img src={image_url} alt=""/>
         <h3>{topic}</h3>
      </a> */}
      EachPlan
    </div>
  )
}

export default withAuth(EachPlan);