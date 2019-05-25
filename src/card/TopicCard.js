import React from 'react'

const style = {
  height: '80px',
  width: '100px',
  margin: '10px'
}

function TopicCard(props) {
  console.log('props.image', props.image)
  return (
    <div className='topicCard'>
       <p>{props.topic}</p>
       <img src={require(`../images/${props.image}`)} alt="" style={style}/>
    </div>
  )
}

export default TopicCard
