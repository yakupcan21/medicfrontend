import React, { useState } from 'react';
import './PatientsPage.scss';
import Navbar from '../../components/menu/NavbarComponent';
import BackgroundMotion from '../../components/BackgroundMotion';
import { Reveal } from '../../components/Reveal';

interface PatientPagePros { }

const PatientPage: React.FC<PatientPagePros> = () => {

  return (
    <div className='patient-page-main-container'>
      <BackgroundMotion />
      <Navbar isDoctor={true} isPatient={false} />
      <div className="main-panel">
        <div className="content-panel">
            <Reveal>
              <div className="bottom">
                <div className='informations-header'>Geçmiş Hastalıklar</div>
                <div className='information-type'>Hastalık Çeşidi</div>
                <div className='information-statement'>Hastalık açıklaması</div>
              </div>
            </Reveal>
        </div>
      </div>
    </div>
  );
};

export default PatientPage;
