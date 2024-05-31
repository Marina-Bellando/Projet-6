import React from 'react'
import '../../style/Banniere.scss'
import banniereImage from '../../assets/PhotosAPropos.png'

const Banniere = () => {
  return (
    <div className="banniere">
      <img src={banniereImage} alt="Banner" className="banniere-image" />
    </div>
  )
}

export default Banniere
