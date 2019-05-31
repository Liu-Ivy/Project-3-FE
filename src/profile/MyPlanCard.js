import React from 'react';
import './my-plan-card.css';
import {Link} from 'react-router-dom';
const style = {
  height: '120px',
  width: '120px',
  margin: '15px'
}


function MyPlanCard(props) {
const {_id, title, imageUrl} = props.plan;
  console.log(props.plan)
  
  return (
    <div className="handle-card">
      <div className="all-card">
        <Link to={`../topic/${_id}`}>
        <div>
          <p>{title}</p>
        </div>
        <div className="plan-card">
          <img src={imageUrl} alt="" style={style}/>
        </div>
        </Link>
        <div className="button-card">
          <button className="button is-danger is-outlined is-normal" onClick={()=>{props.handleEdit(props.index)}}>Edit</button>
          <button className="button is-warning is-outlined is-normal" onClick={()=>{props.handleDelete(props.plan)}}>Delete</button>
        </div>
      </div>
    </div>


  )
}

export default MyPlanCard