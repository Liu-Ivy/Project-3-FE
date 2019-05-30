import React from 'react';

const style = {
  height: '180px',
  width: '200px',
  margin: '10px'
}

function PlanCard(props) {
const {_id, title, imageUrl} = props.plan;
  console.log(props.plan)
  
  return (
    <a href={`../topic/${_id}`}>
      <div className="plane-card">
        <p>{title}</p>
        <img src={imageUrl} alt="" style={style}/>
      </div>
    </a>
  )
}

export default PlanCard
