import React from 'react'


function TopicCard(props) {
  console.log('props.image', props.image)
  return (
    <div className='topicCard'>
       {props.title}
       <img src={require(props.image)} alt=""/>
    </div>
  )
}

export default TopicCard
