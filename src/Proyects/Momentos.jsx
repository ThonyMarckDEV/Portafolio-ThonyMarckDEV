import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';  // Importa Link aquí
import '../styles/Proyectos/Momentos/MomentosPC.css';
import '../styles/Proyectos/Momentos/MomentosMOBILE.css';

function Momentos() {
    return (
        <div className="Momentos-container">
          <h1>Momentos Project</h1>
          <p>Este es el proyecto Momentos.</p>
          <a href="/" className="btn">Volver al Inicio</a> {/* Enlace opcional */}
        </div>
      );
}

export default Momentos;

