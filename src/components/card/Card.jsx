import React from 'react'
import './card.css'
import {Link} from 'react-router-dom'

function Card({card}) {
  return (
    <div className='card'>
      <Link className="link" to={`/post/${card.id}`}>
          <img src = {card.img}></img>
          <span>{card.title}</span>
          <p>{card.desc}</p>
          <button>Read More</button>
      </Link>
    </div>
  )
}

export default Card