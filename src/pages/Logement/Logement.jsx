import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const LogementDetail = () => {
  const { id } = useParams();


  const logementDetails = {
    id,
    title: `Titre du logement ${id}`,
    location: `Location du logement ${id}`,
    tags: ['Tag1', 'Tag2', 'Tag3'],
    pictures: [
      'https://via.placeholder.com/800x400?text=Image+1',
      'https://via.placeholder.com/800x400?text=Image+2',
      'https://via.placeholder.com/800x400?text=Image+3'
    ],
    description: `Description du logement ${id}`,
    equipments: ['Equipement1', 'Equipement2', 'Equipement3']
  };

  const [showDescription, setShowDescription] = useState(false);
  const [showEquipments, setShowEquipments] = useState(false);

  return (
    <div>
      <Carousel>
        {logementDetails.pictures.map((picture, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={picture}
              alt={`Slide ${index}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <h1>{logementDetails.title}</h1>
      <h2>{logementDetails.location}</h2>

      <div>
        {logementDetails.tags.map((tag, index) => (
          <button key={index} className="btn btn-secondary m-1">
            {tag}
          </button>
        ))}
      </div>

      <button className="btn btn-primary mt-3" onClick={() => setShowDescription(!showDescription)}>
        Description
      </button>
      {showDescription && <p>{logementDetails.description}</p>}

      <button className="btn btn-primary mt-3" onClick={() => setShowEquipments(!showEquipments)}>
        Équipements
      </button>
      {showEquipments && (
        <ul>
          {logementDetails.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LogementDetail;