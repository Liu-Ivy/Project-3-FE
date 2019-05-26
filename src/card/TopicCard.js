import React from 'react'
import './card.css'

// const style = {
//   height: '80px',
//   width: '100px',
//   margin: '10px'
// }

function TopicCard(props) {
  const bg = require(`../images/${props.image}`)
  return (
    <a href={`./topics/${props.topic.toLowerCase()}`}>
      <div className='topicCard' style ={{ backgroundImage: "url("+bg+")" }}>
        <p>{props.topic}</p>
      </div>
    </a>
  )
}

export default TopicCard





