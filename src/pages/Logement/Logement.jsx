import React from 'react'
import { useParams } from 'react-router-dom'
import { appartementListe } from '../../datas/appartementListe'
import Slideshow from '../../components/Slideshow/Slideshow'
import Collapse from '../APropos/Collapse'
import '../../style/Logement.scss'

const Logement = () => {
  const { id } = useParams()
  const cleanId = id.startsWith(':') ? id.substring(1) : id
  const logement = appartementListe.find(
    (appartement) => appartement.id === cleanId
  )
  if (!logement) {
    return <div>Logement non trouvé</div>
  }

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
            <img src={logement.host.picture} alt={logement.host.name} />
            <p>{logement.host.name}</p>
          </div>
          <div className="logement-rating">{ratingStars}</div>
        </div>
      </div>
      <Collapse title="Description">{logement.description}</Collapse>
      <Collapse title="Équipements">
        <ul>
          {logement.equipments.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Collapse>
    </div>
  )
}

export default Logement
