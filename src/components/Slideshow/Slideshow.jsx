import React, { useState } from 'react'
import '../../style/Slideshow.scss' // Assurez-vous de créer ce fichier CSS

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? pictures.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const newIndex = currentIndex === pictures.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  if (pictures.length === 1) {
    return (
      <div className="slideshow">
        <img src={pictures[0]} alt="Logement" className="slideshow-image" />
      </div>
    )
  }

  return (
    <div className="slideshow">
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slideshow-image"
      />
      <button
        className="slideshow-button slideshow-button-left"
        onClick={prevSlide}
      >
        ‹
      </button>
      <button
        className="slideshow-button slideshow-button-right"
        onClick={nextSlide}
      >
        ›
      </button>
      <div className="slideshow-index">
        {currentIndex + 1} / {pictures.length}
      </div>
    </div>
  )
}

export default Slideshow
