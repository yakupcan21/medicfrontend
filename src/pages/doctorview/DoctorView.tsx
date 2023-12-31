// DoctorView.tsx

import React, { useState } from 'react';
import './DoctorView.scss';
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
      <Navbar isDoctor={true} isPatient={false} />
      
      <div className="content-wrapper">
        <div className="content-doctor">
          <table>
            <thead>
              <tr>
                <th>Tarih</th>
                <th>Rapor No</th>
                <th>Doktor İsmi</th>
                <th>Hasta TC No</th>
                <th>Hasta İsmi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01.01.2021</td>
                <td>1</td>
                <td>Dr. Ali</td>
                <td>12345678910</td>
                <td>Ahmet</td>
              </tr>
            </tbody>
          </table>
          <div id="vue-slider">
            <div className="picture-doctor">
              <img src={activePicture} alt="Active Picture" />
            </div>
            <div className="pictures-doctor">
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
          <div className="content-right">
            <p>BULGULAR:</p>
            {/* Add your content here */}
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