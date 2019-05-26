import React from 'react';

const style = {
  height: '80px',
  width: '100px',
  margin: '10px'
}


function PlanCard(props) {

  console.log(props)
  
  return (
    <a href={`../topic/${props.plan._id}`}>
      <div className="planeCard">
        <p>{props.plan.title}</p>
        <img src={props.plan.image} alt="" style={style}/>
      </div>
    </a>
  )
}

export default PlanCard
