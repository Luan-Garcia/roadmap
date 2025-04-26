import React from 'react'
import './sisembarque.css'
import { Link } from 'react-router-dom';

const SistemasEmbarcados = () => {
  return (
    <>
      <div className="roadmap-grid">
        <div className="step">
          <Link to="/Roadmaps/SistemasEmbarcados">Sistemas Embarcados</Link>
        </div>
      </div>
    </>
  )
};

export default SistemasEmbarcados;