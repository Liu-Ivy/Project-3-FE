import React from 'react';
import {Link} from 'react-router-dom';

const style = {
  height: '180px',
  width: '200px',
  margin: '10px'
}

function PlanCard(props) {
const {_id, title, imageUrl} = props.plan;
  console.log(props.plan)
  
  return (
    <Link to={`../topic/${_id}`}>
      <div className="plane-card">
        <p>{title}</p>
        <img src="https://blogs.lse.ac.uk/lsereviewofbooks/files/2016/02/Books-for-Survey.jpg" alt="" style={style}/>
      </div>
    </Link>
  )
}

export default PlanCard
