import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';  // Importa Link aquí
import '../styles/Home/HomePC.css';
import '../styles/Home/HomeMobile.css';
import '../styles/Home/HomeTablet.css';

function Home() {
  const [showImages, setShowImages] = useState(false);

  const sliderRef = useRef(null); // Referencia para el contenedor del slider
  const startX = useRef(0); // Posición inicial del toque
  const scrollLeft = useRef(0); // Posición inicial del scroll

  const projects = [
    {
      img: `img/eco_ruta_logo.jpg`,
      technologies: [
        `img/java_icon.png`,
        `img/php_icon.png`,
        `img/firebase_icon.png`,
        `img/mysql_icon.png`
      ],
      route: '/EcoRuta'
    },
    {
      img: `img/Momentoslogo.jpg`,
      technologies: [
        `img/html_icon.png`,
        `img/css_icon.png`,
        `img/js_icon.png`,
        `img/php_icon.png`,
        `img/mysql_icon.png`
      ],
      route: '/momentos'
    },
    {
      img: `img/NAZARENLOGINUI.png`,
      technologies: [
        `img/html_icon.png`,
        `img/css_icon.png`,
        `img/js_icon.png`,
        `img/php_icon.png`,
        `img/mysql_icon.png`

      ],
      route: '/NazarenoWEB'
    }
  ];  
  
  const handleLogoClick = () => {
    setShowImages(!showImages); // Alternar la visibilidad de las imágenes
  };

  // Manejar el deslizamiento táctil
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Ajustar la velocidad del deslizamiento
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="home-container">
    {/* Logo centrado */}
    <div className="logo-container">
      <img
        src={`img/logo.png`} // Ruta correcta para GitHub Pages
        className="logo"
        alt="Logo"
        onClick={handleLogoClick}
      />
    </div>

      {/* Redes sociales debajo del logo, pero encima del slider */}
      <div className="social-media-container">
        <a href="https://www.facebook.com/thony.marck.39" target="_blank" rel="noopener noreferrer">
          <img src={`img/facebook_icon.png`} className="social-media-icon facebook-icon" alt="Facebook" />
        </a>
        <a href="https://wa.me/902207108" target="_blank" rel="noopener noreferrer">
        <img src={`img/whatsapp_icon.png`} className="social-media-icon whatsapp-icon" alt="WhatsApp" />
        </a>
        <a href="https://www.instagram.com/thonymarck08/" target="_blank" rel="noopener noreferrer">
        <img src={`img/instagram_icon.png`} className="social-media-icon instagram-icon" alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/anthony-marck-mendoza-sanchez-a7a1aa311/" target="_blank" rel="noopener noreferrer">
        <img src={`img/linkedin_icon.png`} className="social-media-icon linkedin-icon" alt="LinkedIn" />
        </a>
        <a href="https://github.com/ThonyMarckDEV" target="_blank" rel="noopener noreferrer">
        <img src={`img/github_icon.png`} className="social-media-icon github-icon" alt="GitHub" />
        </a>
        <a href={`pdf/CV.pdf`} target="_blank" rel="noopener noreferrer">
          <img src={`img/cv_icon.png`} className="social-media-icon cv-icon" alt="CV" />
        </a>
      </div>

       {/* Mis Proyectos */}

       <h1 className='proyectos'>Mis Proyectos</h1>

      {/* Slider de proyectos con soporte táctil */}
      <div className="slider-container" ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}>
        <div className="slider">
          {projects.map((project, index) => (
            <Link to={project.route} key={index}> {/* Clickeable a la ruta correcta */}
              <div className="slide">
                <img src={project.img} alt={`Project ${index + 1}`} className="project-image" />
                <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <div className="technology-background" key={i}>
                    <img src={tech} alt={`Technology ${i}`} className="technology-icon" />
                  </div>
                ))}
              </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
