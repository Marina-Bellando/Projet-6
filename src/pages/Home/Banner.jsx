import React from 'react'
import '../../style/Banner.scss'
import bannerImage from '../../assets/PhotosHome.png'

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner" className="banner-image" />
      <h1 className="banner-text">Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner
