import React from 'react';

const style = {
  height: '80px',
  width: '100px',
  margin: '10px'
}


function PlanCard(props) {

  return (
    <div className="planeCard">
      <p>{props.plan.title}</p>
      <img src={require(`../images/${props.plan.image}`)} alt="" style={style}/>
    </div>
  )
}

export default PlanCard
