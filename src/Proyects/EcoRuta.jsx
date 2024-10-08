// EcoRuta.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';  // Importa Link aquí
import '../styles/Proyectos/EcoRuta/EcoRutaPC.css'; // Asegúrate de la ruta correcta
import '../styles/Proyectos/EcoRuta/EcoRutaMOBILE.css';

function EcoRuta() {
  return (
    <div className="ecoruta-container">
      <h1>EcoRuta Project</h1>
      <p>Este es el proyecto EcoRuta. Aquí encontrarás información detallada sobre cómo implementamos la ruta.</p>
      <a href="/Portafolio-ThonyMarckDEV" className="btn">Volver al Inicio</a> {/* Enlace opcional */}
    </div>
  );
}

export default EcoRuta;
