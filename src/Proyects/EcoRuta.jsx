import React, { useState } from 'react';
import '../styles/Proyectos/EcoRuta/EcoRutaPC.css';
import '../styles/Proyectos/EcoRuta/EcoRutaMOBILE.css';

function EcoRuta() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    'img/UI1.jpg',
    'img/UI2.jpg',
    'img/UI3.jpg',
    'img/UI4.jpg',
    'img/UI5.jpg',
    'img/UI6.jpg',
    'img/UI7.jpg',
    'img/UI8.jpg',
    'img/UI9.jpg'
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
    <div className="ecoruta-container">
      <h1 className="ecoruta-h1">EcoRuta Project</h1>
      {/* Imagen del celular */}
      <div className="ecoruta-phone-frame">
        {/* Carrusel detrás de la pantalla del celular */}
        <div className="ecoruta-carousel-container">
          <div className="ecoruta-carousel-slide">
            <img src={images[currentSlide]} alt={`Imagen ${currentSlide + 1}`} />
          </div>
          <button className="ecoruta-carousel-control ecoruta-carousel-control-prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="ecoruta-carousel-control ecoruta-carousel-control-next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
        <img className="ecoruta-phone-image" src="img/celular.png" alt="Celular" />
      </div>

      <p className="ecoruta-p">
        EcoRuta es una aplicación diseñada para ofrecer una experiencia interactiva a los usuarios que buscan explorar rutas ecológicas y puntos de interés.
        <br /> 
        EcoRuta permite a los usuarios acceder a un mapa interactivo, conectar con la naturaleza de manera fácil y eficiente, y gestionar su perfil de forma sencilla.
      </p>
      
      {/* Enlace al repositorio de GitHub con imagen */}
      <a href="https://github.com/SaithG04/Eco_Ruta" className="ecoruta-github-link" target="_blank" rel="noopener noreferrer">
        <img src="img/github_icon.png" alt="GitHub" className="ecoruta-github-icon" />
      </a>
      
      <a href="/Portafolio-ThonyMarckDEV" className="ecoruta-btn">Volver al Inicio</a>
    </div>
  );
}

export default EcoRuta;
