import React from 'react'
import '../../style/Card.scss'
import { Link } from 'react-router-dom'

const Card = ({ cover, title, id }) => {
  return (
    <Link to={`/Logement/${id}`} className="card-link">
      <div className="card">
        <img src={cover} alt={title} className="card-image" />
        <h2 className="card-title">{title}</h2>
      </div>
    </Link>
  )
}

export default Card
