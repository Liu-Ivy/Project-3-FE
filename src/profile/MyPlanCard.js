import React from 'react';

const style = {
  height: '80px',
  width: '100px',
  margin: '10px'
}


function MyPlanCard(props) {
const {_id, title, imageUrl} = props.plan;
  console.log(props.plan)
  
  return (
    <div>
      <a href={`../topic/${_id}`}>
        <div className="plan-card">
          <p>{title}</p>
          <img src={imageUrl} alt="" style={style}/>
        </div>
      </a>
      <button onClick={()=>{props.handleEdit(props.index)}}>Edit</button>
      <button>Delete</button>
    </div>


  )
}

export default MyPlanCard