import React, { useState } from 'react';
import './YapayZeka.scss';
import Navbar from "../../components/menu/NavbarComponent.tsx";
import BackgroundMotion from "../../components/BackgroundMotion.tsx";



interface DoctorViewProps {}

import resimImg from '../../assets/resim.png'
import personImg from '../../assets/person.png';
import plug1Img from '../../assets/plug1.png';
import plug2Img from '../../assets/plug2.png';
import plug3Img from '../../assets/plug3.png';
import plug4Img from '../../assets/plug4.png';

const DoctorView: React.FC<DoctorViewProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAvatar, setIsAvatar] = useState(false);
  const [indexOfActivePicture, setIndexOfActivePicture] = useState(0);
  const [activePicture, setActivePicture] = useState<string>(plug1Img);
  const questionImg = resimImg;
  const peopleFill = personImg;
  const pictures = [plug1Img, plug2Img, plug3Img, plug4Img];
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAvatar = () => {
    setIsAvatar(!isAvatar);
  };

  const navigate = (page: string) => {
    console.log(`Navigating to ${page}`);
    // Add your navigation logic here
  };

  const changeActivePicture = (index: number) => {
    setActivePicture(pictures[index]);
    setIndexOfActivePicture(index);
  };
  return (
    <article>
      <BackgroundMotion />
      <Navbar isDoctor={false} isPatient={true} />
      
      <div className="content-wrapper">
      
        <div className="content">
            
                <button className="goruntu_button" onClick={toggleAvatar}>Görüntü Yükle</button>
            
        
          <div id="vue-slider">
            <div className="picture">
              <img src={activePicture} alt="Active Picture" />
            </div>
            <div className="pictures">
              {pictures.map((picture, index) => (
                <div key={index}>
                  <img
                    src={picture}
                    onMouseOver={() => changeActivePicture(index)}
                    className={index === indexOfActivePicture ? 'active' : ''}
                    alt={`Picture ${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <h2 className='title'>Hasta Bilgileri</h2>
            
  <div className="content-text-doctor" >
        
       
            <input type="text" placeholder="TC Kimlik Numarası:" />
          <div className="name-container2">
            <input type="text" placeholder="Ad:" />
            <input type="text" placeholder="Soyad:" />
        </div>
            <input className='date-style' type="date" placeholder="Doğum Tarihi:" />
            
            <input type="text" placeholder="Cinsiyet:" />
            <button className="rapor-button">Raporlamaya Geç</button>
         
 </div>

            
          
          <div className="back-button" id="navbar-return" onClick={toggleMenu}>
            Geri Dön
            </div>
        </div>
      </div>
    </article>
  );
};

export default DoctorView;