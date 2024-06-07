import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { appartementListe } from '../../datas/appartementListe'
import Slideshow from '../../components/Slideshow/Slideshow'
import Collapse from '../APropos/Collapse'
import '../../style/Logement.scss'

const Logement = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const cleanId = id.startsWith(':') ? id.substring(1) : id
  const logement = appartementListe.find(
    (appartement) => appartement.id === cleanId
  )
  useEffect(() => {
    if (!logement) {
      navigate('/error')
    }
  }, [logement, navigate])

  if (!logement) {
    return null
  }

  const [firstName, lastName] = logement.host.name.split(' ')
  const ratingStars = []
  for (let i = 0; i < 5; i++) {
    ratingStars.push(
      <span key={i} className={`star ${i < logement.rating ? 'filled' : ''}`}>
        ★
      </span>
    )
  }

  return (
    <div className="logement">
      <Slideshow pictures={logement.pictures} />
      <div className="logement-info">
        <div className="logement-details">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="logement-host">
          <div className="host-info">
            <div className="host-name">
              <p className="host-first-name">{firstName}</p>
              <p className="host-last-name">{lastName}</p>
            </div>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className="logement-rating">{ratingStars}</div>
        </div>
      </div>
      <div className="logement-collapses">
        <Collapse title="Description" customClass="logement-collapse">
          <div className="collapse-description">{logement.description}</div>
        </Collapse>
        <Collapse title="Équipements" customClass="logement-collapse">
          <ul>
            {logement.equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  )
}

export default Logement
