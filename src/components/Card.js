import React from 'react'

const Card = (props) => {
let { title } = props;
  return (
    <div className='card'>
			<h5>{title}</h5>
    </div>
  )
}

export default Card;