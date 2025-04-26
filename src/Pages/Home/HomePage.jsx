import React from 'react';
import './homepage.css';
import DsWeb from '../Components/DesenvolvimentoWeb/DsWeb';
import AiDados from '../Components/AiDados/AiDados';
import CyberSecurity from '../Components/CyberSecurity/CyberSecurity';
import BancoDados from '../Components/BancoDeDados/BancoDados';
import CloudComputing from '../Components/CloudComputing/CloudComputing';
import GameDevelop from '../Components/DevGames/GameDevelop';
import Dados from '../Components/Dados/Dados';
import TecEmergentes from '../Components/TecEmergentes/TecEmergentes';
import SisEmbarque from '../Components/SistemasEmbarcados/SisEmbarque';
import DevMobile from '../Components/DevMobile/DevMobile';
import Hardware from '../Components/Hardware/Hardware';
import NavBar from '../Components/NavBar/NavBar';
import { Link } from 'react-router-dom';

const HomePage = () => {

  return (
    <>
      <NavBar/>

      <div className="main-title">
        <h1>Illusion Roadmaps</h1>
        <p>Diversos guias de aprendizado na área de tecnologia</p>
      </div>

      <div className="roadmap-grid" style={{gap: '2px'}}>
      <Link to="/roadmaps/DevWeb"><DsWeb /></Link>
      <Link to="/roadmaps/AieDados"><AiDados /></Link>
      <Link to="/roadmaps/Cybersecurity"><CyberSecurity /></Link>
      <Link to="/roadmaps/BancodeDados"><BancoDados /></Link>
      <Link to="/roadmaps/cloudComputing"><CloudComputing /></Link>
      <Link to="/roadmaps/GameDev"><GameDevelop /></Link>
      <Link to="/roadmaps/Programming"><Dados /></Link>
      <Link to="/roadmaps/InovaçoesTech"><TecEmergentes /></Link>
      <Link to="/roadmaps/SistemasEmbarcados"><SisEmbarque /></Link>
      <Link to="/roadmaps/DevMobile"><DevMobile /></Link>
      <Link to="/roadmaps/Hardware"><Hardware /></Link>
      </div>
    </>
  );
};

export default HomePage;
