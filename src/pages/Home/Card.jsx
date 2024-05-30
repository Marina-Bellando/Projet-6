import React from 'react'
import '../../style/Card.scss'

const Card = ({ cover, title }) => {
  return (
    <div className="card">
      <img src={cover} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
    </div>
  )
}

export default Card
