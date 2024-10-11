import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Proyectos/NazarenoWEB/NazarenoWEBPC.css';
import '../styles/Proyectos/NazarenoWEB/NazarenoWEBMOBILE.css';

function NazarenoWEB() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    'img/NAZARENLOGINUI.png',
    'img/NZWUI1.jpg',
    'img/NZWUI2.jpg',
    'img/NZWUI3.jpg',
    'img/NZWUI4.jpg',
    'img/NZWUI5.jpg',
    'img/NZWUI6.jpg'
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
    <div className="nazarenoweb">
      <h1 className="nazarenoweb-h1">Nazareno Web Platform</h1>

      <div className="nazarenoweb-laptop-frame">
        <div className="nazarenoweb-carousel-container">
          <div className="nazarenoweb-carousel-slide">
            <img src={images[currentSlide]} alt={`Imagen ${currentSlide + 1}`} />
          </div>
          <button className="nazarenoweb-carousel-control nazarenoweb-carousel-control-prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="nazarenoweb-carousel-control nazarenoweb-carousel-control-next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
        <img className="nazarenoweb-laptop-image" src="img/laptop.png" alt="Laptop" />
      </div>

      <p className="nazarenoweb-p">
        Nazareno Web es una plataforma diseñada para el Colegio Nazareno, con tres roles principales: 
        administrador, docente y alumnos. Los alumnos pueden subir y resolver material académico, 
        mientras que los docentes pueden calificar trabajos y gestionar perfiles. 
        El administrador se encarga de gestionar matrículas, asignar especialidades a los docentes, 
        y supervisar el correcto funcionamiento del sistema. Además, los alumnos pueden ver sus notas 
        y tener acceso a su perfil personalizado, al igual que los docentes.
      </p>

      <a href="https://github.com/ThonyMarckDEV/NazarenoWEB" className="nazarenoweb-github-link" target="_blank" rel="noopener noreferrer">
        <img src="img/github_icon.png" alt="GitHub" className="nazarenoweb-github-icon" />
      </a>

      <Link to="/Portafolio-ThonyMarckDEV" className="nazarenoweb-btn">Volver al Inicio</Link>
    </div>
  );
}

export default NazarenoWEB;
