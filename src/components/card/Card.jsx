import React from 'react'
import './card.css'

function Card({card}) {
  return (
    <div className='card'>
        
        <img src = {card.img}></img>
        <span>{card.title}</span>
        <p>{card.desc}</p>
        <button>Read More</button>
    </div>
  )
}

export default Card