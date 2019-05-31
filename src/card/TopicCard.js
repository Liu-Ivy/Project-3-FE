import React from 'react'
import './card.css';
import {Link} from 'react-router-dom';

// const style = {
//   height: '80px',
//   width: '100px',
//   margin: '10px'
// }

function TopicCard(props) {
  const bg = require(`../images/${props.image}`)
  return (
    <div className="columns">
      <Link to={`/topics/${props.topic.toLowerCase()}`}>
        <div className='topicCard cloumns' style ={{ backgroundImage: "url("+bg+")" }}>
          <p>{props.topic}</p>
        </div>
      </Link>
    </div>
  )
}

export default TopicCard





