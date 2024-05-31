import React from 'react'
import Banner from './Banner'
import Card from './Card'
import { appartementListe } from '../../datas/appartementListe'
import '../../style/Home.scss'

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="gallery">
        {appartementListe.map((appartement) => (
          <Card
            key={appartement.id}
            cover={appartement.cover}
            title={appartement.title}
            id={appartement.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
