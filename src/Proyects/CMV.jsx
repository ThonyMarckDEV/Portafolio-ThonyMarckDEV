import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';  // Importa Link aquí
import '../styles/Proyectos/CMV/CMVPC.css';
import '../styles/Proyectos/CMV/CMVMOBILE.css';

function CMV() {
  return (
    <div className="CMV-container">
      <h1>CMV Project</h1>
      <p>Este es el proyecto CMV.</p>
      <a href="/Portafolio-ThonyMarckDEV" className="btn">Volver al Inicio</a> {/* Enlace opcional */}
    </div>
  );
}

export default CMV;
