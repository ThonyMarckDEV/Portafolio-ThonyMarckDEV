import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import EcoRuta from './Proyects/EcoRuta'; // Importa el componente que vas a mostrar en esta ruta
import Momentos from './Proyects/Momentos'; // Otro componente
import CMV from './Proyects/CMV'; // Otro componente

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/EcoRuta" element={<EcoRuta />} /> {/* Define la ruta EcoRuta */}
        <Route path="/momentos" element={<Momentos />} />
        <Route path="/cmv" element={<CMV />} />
      </Routes>
    </Router>
  );
}

export default App;
