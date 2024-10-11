import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Proyectos/Momentos/MomentosPC.css';
import '../styles/Proyectos/Momentos/MomentosMOBILE.css';

function Momentos() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    'img/MUI1.jpg',
    'img/MUI2.jpg',
    'img/MUI3.jpg',
    'img/MUI4.jpg'
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="momentos-container">
      <h1 className="momentos-h1">Momentos Project</h1>

      <div className="momentos-laptop-frame">
        <div className="momentos-carousel-container">
          <div className="momentos-carousel-slide">
            <img src={images[currentSlide]} alt={`Imagen ${currentSlide + 1}`} />
          </div>
          <button className="momentos-carousel-control momentos-carousel-control-prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="momentos-carousel-control momentos-carousel-control-next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
        <img className="momentos-laptop-image" src="img/laptop.png" alt="Laptop" />
      </div>

      <p className="momentos-p">
        Proyecto Momentos es una página web diseñada para la empresa de fotografía Momentos, 
        donde los usuarios pueden registrarse y acceder a una amplia variedad de servicios fotográficos. <br />
        A través de esta plataforma, los clientes pueden explorar diferentes paquetes para sesiones fotográficas, 
        adaptados a diversas necesidades como bodas, eventos especiales, retratos familiares y más.
      </p>

      <a href="https://github.com/SaithG04/Web_Site_Momentos" className="momentos-github-link" target="_blank" rel="noopener noreferrer">
        <img src="img/github_icon.png" alt="GitHub" className="momentos-github-icon" />
      </a>

      <a href="/Portafolio-ThonyMarckDEV" className="momentos-btn">Volver al Inicio</a>
    </div>
  );
}

export default Momentos;
